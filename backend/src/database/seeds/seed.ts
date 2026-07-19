import { DataSource } from 'typeorm';
import { Category } from '../../modules/categories/category.entity';

const categories = [
  { name: 'Restorani', slug: 'restorani', icon: 'utensils', sortOrder: 1 },
  { name: 'Kafići', slug: 'kafici', icon: 'coffee', sortOrder: 2 },
  { name: 'Trgovine', slug: 'trgovine', icon: 'shopping-bag', sortOrder: 3 },
  { name: 'Tehnologija', slug: 'tehnologija', icon: 'laptop', sortOrder: 4 },
  { name: 'Zdravlje', slug: 'zdravlje', icon: 'heart', sortOrder: 5 },
  { name: 'Obrazovanje', slug: 'obrazovanje', icon: 'book', sortOrder: 6 },
  { name: 'Usluge', slug: 'usluge', icon: 'briefcase', sortOrder: 7 },
  { name: 'Smještaj', slug: 'smjestaj', icon: 'bed', sortOrder: 8 },
  { name: 'Automobilizam', slug: 'automobilizam', icon: 'car', sortOrder: 9 },
  { name: 'Sport i rekreacija', slug: 'sport-i-rekreacija', icon: 'football', sortOrder: 10 },
  { name: 'Kultura i zabava', slug: 'kultura-i-zabava', icon: 'music', sortOrder: 11 },
  { name: 'Ostalo', slug: 'ostalo', icon: 'grid', sortOrder: 99 },
];

async function seed() {
  const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'ocjeni',
    password: process.env.DB_PASSWORD || 'ocjeni123',
    database: process.env.DB_DATABASE || 'ocjeni_ba',
    entities: [Category],
    synchronize: true,
  });

  await dataSource.initialize();
  console.log('📦 Povezan na bazu podataka');

  const categoryRepository = dataSource.getRepository(Category);

  for (const category of categories) {
    const existing = await categoryRepository.findOne({ where: { slug: category.slug } });
    if (!existing) {
      await categoryRepository.save(category);
      console.log(`✅ Kreirana kategorija: ${category.name}`);
    }
  }

  console.log('🎉 Seed završen!');
  await dataSource.destroy();
}

seed().catch((error) => {
  console.error('❌ Greška pri seedu:', error);
  process.exit(1);
});

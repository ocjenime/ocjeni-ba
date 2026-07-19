"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  name: string;
  email: string;
  type: "user" | "business";
}

interface Business {
  ownerName: string;
  ownerEmail: string;
  businessName: string;
  category: string;
  city: string;
  address: string;
  website: string;
  description: string;
  phone: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
}

interface AuthContextType {
  user: User | null;
  business: Business | null;
  loginBusiness: (email: string, password: string) => boolean;
  registerBusiness: (data: Omit<Business, "verified" | "rating" | "reviewCount"> & { password: string }) => void;
  loginUser: (email: string, password: string) => boolean;
  registerUser: (name: string, email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [business, setBusiness] = useState<Business | null>(null);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("ocjeni_user");
      const savedBusiness = localStorage.getItem("ocjeni_business");
      if (savedUser) setUser(JSON.parse(savedUser));
      if (savedBusiness) setBusiness(JSON.parse(savedBusiness));
    } catch {
      // corrupted localStorage data
    }
  }, []);

  const loginBusiness = (email: string, password: string): boolean => {
    try {
    const businesses = JSON.parse(localStorage.getItem("ocjeni_businesses") || "[]");
    const found = businesses.find((b: Business & { password: string }) => b.ownerEmail === email && b.password === password);
    if (found) {
      const { password: _, ...businessData } = found;
      setBusiness(businessData);
      localStorage.setItem("ocjeni_business", JSON.stringify(businessData));
      setUser({ name: businessData.ownerName, email: businessData.ownerEmail, type: "business" });
      localStorage.setItem("ocjeni_user", JSON.stringify({ name: businessData.ownerName, email: businessData.ownerEmail, type: "business" }));
      return true;
    }
    return false;
    } catch { return false; }
  };

  const registerBusiness = (data: Omit<Business, "verified" | "rating" | "reviewCount"> & { password: string }) => {
    try {
    const businesses = JSON.parse(localStorage.getItem("ocjeni_businesses") || "[]");
    const newBusiness = {
      ...data,
      verified: false,
      rating: 0,
      reviewCount: 0,
    };
    businesses.push(newBusiness);
    localStorage.setItem("ocjeni_businesses", JSON.stringify(businesses));
    const { password: _, ...businessData } = newBusiness;
    setBusiness(businessData);
    localStorage.setItem("ocjeni_business", JSON.stringify(businessData));
    setUser({ name: data.ownerName, email: data.ownerEmail, type: "business" });
    localStorage.setItem("ocjeni_user", JSON.stringify({ name: data.ownerName, email: data.ownerEmail, type: "business" }));
    } catch { /* corrupted data */ }
  };

  const loginUser = (email: string, password: string): boolean => {
    try {
    const users = JSON.parse(localStorage.getItem("ocjeni_users") || "[]");
    const found = users.find((u: User & { password: string }) => u.email === email && u.password === password);
    if (found) {
      const { password: _, ...userData } = found;
      setUser(userData);
      localStorage.setItem("ocjeni_user", JSON.stringify(userData));
      return true;
    }
    return false;
    } catch { return false; }
  };

  const registerUser = (name: string, email: string, password: string) => {
    try {
    const users = JSON.parse(localStorage.getItem("ocjeni_users") || "[]");
    const newUser = { name, email, password, type: "user" as const };
    users.push(newUser);
    localStorage.setItem("ocjeni_users", JSON.stringify(users));
    const { password: _, ...userData } = newUser;
    setUser(userData);
    localStorage.setItem("ocjeni_user", JSON.stringify(userData));
    } catch { /* corrupted data */ }
  };

  const logout = () => {
    setUser(null);
    setBusiness(null);
    localStorage.removeItem("ocjeni_user");
    localStorage.removeItem("ocjeni_business");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        business,
        loginBusiness,
        registerBusiness,
        loginUser,
        registerUser,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

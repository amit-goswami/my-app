// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UniversalType = any;

type InitialData = Record<string, UniversalType>;

interface IModule<T extends InitialData> {
  data: T;
}

type CompanyData = {
  header: string;
  subHeader: string;
  address?: string;
};

type PaymentData = {
  table: string[];
  title: string;
  currency?: string;
};

type BankData = {
  bankName: string;
  accountNumber: string;
  ifscCode: string;
};

// Flexible structure
type CustomerTabs = {
  Company: CompanyData | null;
  Payment: PaymentData | null;
  Bank: BankData | null;
};

// Usage
const initialCustomerData: CustomerTabs = {
  Company: null,
  Payment: null,
  Bank: null,
};

// Generic module class
class Module<T extends InitialData> implements IModule<T> {
  public data: T;

  constructor(data: T) {
    this.data = data;
  }

  getTabDetails<K extends keyof T>(tab: K): T[K] {
    return this.data[tab];
  }

  setTabDetails<K extends keyof T>(tab: K, details: T[K]): void {
    this.data[tab] = details;
  }

  getAllTabs(): T {
    return this.data;
  }

  setAllTabs(data: T): void {
    this.data = data;
  }

  getTabKeys(): (keyof T)[] {
    return Object.keys(this.data) as (keyof T)[];
  }

  getTabDetailsByKey<K extends keyof T>(key: K): T[K] | null {
    return this.data[key] ?? null;
  }

  setTabDetailsByKey<K extends keyof T>(key: K, details: T[K]): void {
    this.data[key] = details;
  }
}

const customerModule = new Module<CustomerTabs>(initialCustomerData);

// Type-safe usage
const company = customerModule.getTabDetails("Payment"); // CompanyData | null

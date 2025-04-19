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

type CustomerModuleTab = "Company" | "Payment" | "Bank";

type CustomerModuleDataMap = {
  Company: CompanyData | null;
  Payment: PaymentData | null;
  Bank: BankData | null;
};

type GenericObject<U extends string, T> = Record<U, T>;

interface ICustomerModule<T> {
  data: T;
}

type InitialData = GenericObject<
  CustomerModuleTab,
  CustomerModuleDataMap[CustomerModuleTab]
>;

class CustomerModule<T extends InitialData> implements ICustomerModule<T> {
  public data: T;

  constructor(data: T) {
    this.data = data;
  }

  getTabDetails<K extends CustomerModuleTab>(tab: K): T[K] {
    if (tab in this.data) {
      return this.data[tab];
    }
    throw new Error(`Tab ${tab} does not exist in the data object`);
  }

  setTabDetails<K extends CustomerModuleTab>(tab: K, details: T[K]): void {
    if (tab in this.data) {
      this.data[tab] = details;
    } else {
      throw new Error(`Tab ${tab} does not exist in the data object`);
    }
  }

  getAllTabs(): T {
    return this.data;
  }

  setAllTabs(data: T): void {
    this.data = data;
  }

  getTabKeys(): CustomerModuleTab[] {
    return Object.keys(this.data) as CustomerModuleTab[];
  }

  getTabDetailsByKey<K extends CustomerModuleTab>(key: K): T[K] | null {
    return this.data[key] || null;
  }

  setTabDetailsByKey<K extends CustomerModuleTab>(key: K, details: T[K]): void {
    if (key in this.data) {
      this.data[key] = details;
    } else {
      throw new Error(`Tab ${key} does not exist in the data object`);
    }
  }
}

export default CustomerModule;

const initialData: InitialData = {
  Bank: null,
  Company: null,
  Payment: null,
};

const module = new CustomerModule(initialData);

// ✅ Type-safe usage
const company = module.getTabDetails("Company"); // Typed as CompanyData
const payment = module.getTabDetails("Payment"); // Typed as PaymentData

export interface MenuItem {
    id?: string;
    name: string;
    price: number;
    description: string;
    category: string;
    user_id: string;
    created_at?: string;
  }
  
  export interface InventoryItem {
    id?: string;
    name: string;
    quantity: number;
    unit: string;
    min_stock: number;
    user_id: string;
    created_at?: string;
  }
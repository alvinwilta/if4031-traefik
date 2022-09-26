import { Item } from "../interfaces/item.interface";

class ItemService {
  // TODO: Create constructor if needed
  async createItem(item: Item) {
    try {
      // TODO: Implement
      return item;
    } catch (err: any) {
      throw err;
    }
  }

  async deleteItem(id: number) {
    try {
      // TODO: Implement
      return id;
    } catch (err: any) {
      throw err;
    }
  }
}

export default ItemService;

import log from "../utils/logger";

class Service {
  async addition(x: number, y: number) {
    try {
      log.info("test");
      const result = x + y;
      return result;
    } catch (err: any) {
      throw err;
    }
  }

  async subtraction(x: number, y: number) {
    try {
      return x - y;
    } catch (err: any) {
      throw err;
    }
  }
}

export default Service;

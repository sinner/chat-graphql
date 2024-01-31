import { User } from "../../entity/User";
import { UserRepository } from "../../repository/UserRespository";

export default {
  Query: {
    users(): Promise<User[]> {
      return UserRepository.find();
    },
  },
};

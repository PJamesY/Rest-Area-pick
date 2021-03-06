import { UserDetails } from 'src/utils/types';

export interface AuthenticationProvider {
  validateUser(details: UserDetails);
  createUser();
  findUser();
}

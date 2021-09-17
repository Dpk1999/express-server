interface EmailType {
    traineeEmail: string;
    reviewerEmail: string;

}
interface PermissionsType {
    trainees: {
        read: [string, string, string];
        write: [string, string];
        delete: [string];
    };
    users: {
        read: [string, string, string];
    };
}
interface GetUsers {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}

interface UserType {
    getUsers: GetUsers;
}
interface PermissionsType {
    trainees: {
      read: [string, string, string];
      write: [string, string];
      delete: [string];
    };
    users: {
      read: [string, string, string];
    };
  }
  
  


export { EmailType, UserType, GetUsers, PermissionsType };
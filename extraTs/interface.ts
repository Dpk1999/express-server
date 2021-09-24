interface IEmailType {
    traineeEmail: string;
    reviewerEmail: string;

}
interface IPermissionsType {
    trainees: {
        read: [string, string, string];
        write: [string, string];
        delete: [string];
    };
    users: {
        read: [string, string, string];
    };
}
interface IGetUsers {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}

interface IUserType {
    getUsers: IGetUsers;
}
interface IPermissionsType {
    trainees: {
      read: [string, string, string];
      write: [string, string];
      delete: [string];
    };
    users: {
      read: [string, string, string];
    };
  }
  


export { IEmailType, IUserType, IGetUsers, IPermissionsType };
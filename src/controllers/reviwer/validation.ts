import { isNumber } from 'util';

export default Object.freeze
({
    create: {
        id: {
            custom: {
                options: (id: number) => {
                  return !isNumber(id);
                },
              },
              errorMessage: 'Bad audience id Format',
              in: ['body'],
              optional: false,
              required: true,


        },
        name: {
            exists: true,
            regex: '',
            in: ['body'],
            errorMessage: 'Name is required',
        }
    },
    delete: {
        id: {
            exists: true,
            string: true,
            errorMessage: 'name is required',
            in: ['param']
        }
    },
    // get: {
    //     skip: {
    //         exists: false,
    //         in: ['body'],
    //         errorMessage: 'Skip is required',
    //     },
    //     limit: {
    //         exists: false,
    //         in: ['body'],
    //         errorMessage: 'Limit is required',
    //     }
    // },
    getAll: {
        skip: {
            exists: false,
            isInt: true,
            in: ['query'],
            toInt: true,
            optional: true,
            errorMessage: 'Skip is required',
        },
        limit: {
            exists: false,
            isInt: true,
            in: ['query'],
            toInt: true,
            optional: true,
            errorMessage: 'Limit is required',
        }
    },
    get: {
        skip: {
            exists: false,
            isInt: true,
            in: ['query'],
            toInt: true,
            optional: true,
            errorMessage: 'Skip is required',
        },
        limit: {
            exists: false,
            isInt: true,
            in: ['query'],
            toInt: true,
            optional: true,
            errorMessage: 'Limit is required',
        }
    },
    update: {
        id: {
            exists: true,
            string: true,
            in: ['param']
        },
    }
});
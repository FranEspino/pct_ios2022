//El tipado de toda tu informacion y los metodos que se van a utilizar
export interface AuthState {
  statusLogin: 'cheking' | 'authenticated' | 'not-authenticated';
  user: any | null;
  rol: any | null;
}

type AuthAction = 
| {type: 'signIn'; payload: {user: Object, rol:Object}} 
| {type: 'logOut'}


export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state, //crea una copia del state y reemplaza los de abajo
        statusLogin: 'authenticated',
        user: action.payload.user,
        rol: action.payload.rol,
      };
    case 'logOut':
      return {
        ...state,
        statusLogin: 'not-authenticated',
        user: null,
      };
    default:
      return state;
  }
};

export const generateKey = (pre:string) => {
    return `${ pre }_${ new Date().getTime() }_${Math.random().toString(16).slice(2)}`;
}
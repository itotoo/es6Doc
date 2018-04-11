let i = 0;

export default function (obj) {
    console.log('foo',++i);
}

export function each(obj, iterator, context) {
    console.log('fooeawch');
}
  
export { each as forEach };
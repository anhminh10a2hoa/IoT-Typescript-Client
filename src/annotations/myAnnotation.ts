export function Length(arg1: number, arg2: number) {
  return (target: Object, propertyName: any, descriptor: PropertyDescriptor) => {
    const value: Number | String = descriptor.value;

    descriptor.value = function (args: number[] | string[]){
      console.log(descriptor.value);
      if(value instanceof Number) {
        if(value > arg1 || value < arg2) {
          throw new Error("Invalid length")
        }
        else {
          return (<any>value).apply(this, args);
        }
      }
      else if(value instanceof String) {
        if(value.length > arg1 || value.length < arg2){
          throw new Error("Invalid length")
        }
        else {
          return (<any>value).apply(this, args);
        }
      }
    };
  }
}

export function ToString(ctr: Function):void {
  console.log(ctr);
}

export function Getter(target: any, key: string) {
  const capitalizedKey = capitalize(key);
  console.log(capitalizedKey);
  const methodName = `get${capitalizedKey}`;
  Object.defineProperty(target, methodName, { value: () => target[key] });
}

// export function Setter(target: any, key: string) {
//   function(newVal: typeof target[key])
//   const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
//   const methodName = `get${capitalizedKey}`;
//   Object.defineProperty(target, methodName, { value: () => target[key] });
// }

// export function GetterSetter(arg?: number) {
//   return function(target: Object, propertyKey: string) { 
//     let value : string;
//     const getter = function() {
//       return value;
//     };
//     const setter = function(newVal: string) {
//        if(newVal.length < limit) {
//         Object.defineProperty(target, 'errors', {
//           value: `Your password should be bigger than ${limit}`
//         });
//       }
//       else {
//         value = newVal;
//       }      
//     }; 
//     Object.defineProperty(target, propertyKey, {
//       get: getter,
//       set: setter
//     }); 
//   }
// }

export function capitalize(word: string) {
  const firstLetter = word[0].toUpperCase();
  const restOfTheWord = word.substr(1).toLowerCase();
  return `${firstLetter}${restOfTheWord}`;
}
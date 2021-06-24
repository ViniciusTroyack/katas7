/*function myCallback(value) {
  return `${value} é muito bom!`;
}

let myArr = ["maçã", "uva", "pera"];

let retornoMap = myArr.map(myCallback);
let retornoNewMap = myArr.newMap(myCallback);*/

//console.log(retornoMap)
//console.log(retornoNewMap)

//ForEach

Array.prototype.newForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//Fill

Array.prototype.newFill = function (valor, inicio = 0, fim = this.length) {
  if (inicio < 0) {
    inicio = this.length + inicio;
  }
  if (fim < 0) {
    fim = this.length + fim;
  }
  for (let i = inicio; i < fim; i++) {
    this[i] = valor;
  }
};

//Map

Array.prototype.newMap = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this));
  }
  return output;
};

//Some

Array.prototype.newSome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      return true;
    }
  }
  return false;
};

//Find
Array.prototype.newFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      return this[i];
    }
  }
  return undefined;
};

//findIndex

Array.prototype.newFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      return i;
    }
  }
  return -1;
};

//every
Array.prototype.newEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === false) {
      return false;
    }
  }
  return true;
};

//filter

Array.prototype.newFilter = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      output.push(this[i]);
    }
  }
  return output;
};

//concat
Array.prototype.newConcat = function (...arr) {
  let output = this;
  for (let i = 0; i < arr.length; i++) {
    output.push(...arr[i]);
  }
  return output;
};

//includes
Array.prototype.newIncludes = function (value, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};

//indexOf
Array.prototype.newIndexOf = function (value, fromIndex = 0) {
  if (fromIndex >= this.length) {
    return -1;
  }
  if (fromIndex >= 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === value) {
        return i;
      }
    }
  } else {
    for (let i = this.length; i >= 0; i--) {
      if (this[i] === value) {
        return i;
      }
    }
  }
  return -1;
};

//join
Array.prototype.newJoin = function (value = null) {
  let output = "";
  if (value === null) {
    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        output += `${this[i]},`;
      } else {
        output += `${this[i]}`;
      }
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        output += `${this[i]}${value}`;
      } else {
        output += `${this[i]}`;
      }
    }
  }

  return output;
};

//reduce
Array.prototype.newReduce = function (callback) {
  let acc = this[0];

  for (let i = 1; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

//slice
Array.prototype.newSlice = function (inicio = 0, final = 0) {
  let output = [];
  if (inicio < 0 && final >= 0) {
    for (let index = this.length + inicio; index < this.length; index++) {
      output.push(this[index]);
    }
  } else if (final < 0 && inicio >= 0) {
    for (let index = inicio; index < this.length + final; index++) {
      output.push(this[index]);
    }
  } else if (inicio < 0 && final < 0) {
    for (let index = this.length + inicio; index < this.length + final; index++) {
      output.push(this[index]);
    }
  } else {
    for (let index = inicio; index < final; index++) {
      output.push(this[index]);
    }
  }
  return output;
};

//flat
Array.prototype.newFlat = function (depth = 1) {
};

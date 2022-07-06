/**
	@param {Array}     2D bitmap.
	@returns {Number}  number of objects.
*/ 
function countObjects(bitmap) {
	let objects = [];

	// finds out if the k / i exists in the objects, if so, returns its index
	const dotSavedAt = (k, i) => {
		for (let j=0; j<objects.length; j++) {
			for (let j2=0; j2<objects[j].length; j2++) {
				const dot = objects[j][j2];
				if (dot.k === k && dot.i === i) return j;
			}
		}
		return -1;
	}

	// get an object path (going to the right and bottom)
	const getObject = (k, i) => {
		const obj = [];

		if (k >= 0 && k < bitmap.length && bitmap[k][i] === 1) {
			obj.push({ k, i });
			obj.push(...getObject(k, i+1));
			obj.push(...getObject(k+1, i));
		}

		return obj;
	};

	for (let k=0; k<bitmap.length; k++) {
		for (let i=0; i<bitmap.length; i++) {
			const object = getObject(k, i);
			// in case the this dot fails requirements, ignore it
			if (object.length === 0) continue;

			// if there are no objects stored, store it right away and move on
			if (objects.length === 0) {
				objects.push(object);
				continue;
			}

			// find out if any of the dots in the object exists in the objects array
			// if so, it means they are part of the some object, therefore merge them
			// otherwise, just add the object to the objects array
			let objectFoundIdx = -1;
			for (let j=0; j<object.length; j++) {
				const objectDot = object[j];
				const dotSaved = dotSavedAt(objectDot.k, objectDot.i);
				if (dotSaved !== -1) {
					objectFoundIdx = dotSaved;
					break;
				}
			}

			if (objectFoundIdx !== -1) {
				for (let j=0; j<object.length; j++) {
					const objectDot = object[j];
					const savedObject = objects[objectFoundIdx];
					if (!savedObject.find(savedDot => savedDot.k === objectDot.k && savedDot.i === objectDot.i)) savedObject.push(objectDot);
				}
			} else {
				objects.push(object);
			}
		}
	}
	return objects.length;
}

function testCountObjects() {
	let bitmap;

	bitmap = [[1]];
	console.assert(countObjects(bitmap) === 1, '#1')

	bitmap = [[0, 1, 0], [0, 1, 1], [0, 0, 1]];
	console.assert(countObjects(bitmap) === 1, '#2')

	bitmap = [[1, 0, 1], [1, 1, 0], [0, 1, 0]];
	console.assert(countObjects(bitmap) === 2, '#3')

	bitmap = [[1, 0, 1], [0, 1, 0], [0, 0, 0]];
	console.assert(countObjects(bitmap) === 3, '#4')

	bitmap = [[1, 1], [1, 1]];
	console.assert(countObjects(bitmap) === 1, '#5')
	
	bitmap = [[1, 0], [0, 1]];
	console.assert(countObjects(bitmap) === 2, '#6')

	bitmap = [[1, 0, 1, 0], [1, 1, 1, 1], [0, 1, 0 , 1], [0, 0, 0, 0]];
	console.assert(countObjects(bitmap) === 1, '#7')
}

testCountObjects();
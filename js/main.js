function simpleNumber(){

	var i,
		 j;

	nextNumber:
		for ( i = 2; i < 50; i++) {

			for ( j = 2; j < i; j++) {

				if (i % j === 0) {
					continue nextNumber;
				}
			}

		console.log(i);
		}
}

simpleNumber();

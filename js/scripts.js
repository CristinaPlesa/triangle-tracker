function triangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if (side1+side2<=side3||side1+side3<=side2||side2+side3<=side1) {
    return "not_a_triangle"
  } else if (side1===side2||side2===side3||side1===side3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

$(document).ready(function() {
  $("#triangle-info").submit(function(event) {
    
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());
    
    const triangle = triangleType(side1, side2, side3);

    if(triangle==="equilateral"){
      $("#type-triangle").text("Equilateral: All sides are equal.");
    } else if (triangle==="not_a_triangle") {
      $("#type-triangle").text("NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.");
    } else if (triangle==="isosceles") {
      $("#type-triangle").text("Isosceles: Exactly 2 sides are equal.");
    } else {
      $("#type-triangle").text("Scalene: No sides are equal.");
    }

    event.preventDefault();
  });
});

// Equilateral: All sides are equal.
// Isosceles: Exactly 2 sides are equal.
// Scalene: No sides are equal.
// NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.
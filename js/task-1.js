let splitMass = [];
function slugify(title){
    splitMass = title.split(" ");
    let lowercaseMass = splitMass.map(word => word.toLowerCase());
    let joinMass = lowercaseMass.join("-");
    return joinMass;
}
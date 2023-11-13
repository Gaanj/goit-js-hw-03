let a = [];
function slugify(title){
    a = title.split(" ");
    let b = a.join("-");
    return b;
}
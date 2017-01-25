import $ from "jquery";

const cats = ["Tom", "Garfield", "Nermel"];

{

    $("<h1>Cats</h1>").appendTo("body");
    const ul = $("<ul></ul>").appendTo("body");

    for(const cat of cats){
        $("<li></li>").text(cat).appendTo(ul);
    }

}


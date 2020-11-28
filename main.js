var images = ["familybook1.jpg","dad.jpg","mother.jpg","sis.jpg","IMG-20200113-WA0029 (1).jpg"];
var names = ["Fmaily Book","Rajesh Gangapure","Smita Gangapure","Pooja Gangapure","Jay Gangapure"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

var arr=[
    {img_url:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/e27baaec788db849afb50ac601c753cf",
     name:"ALSTOM",star_img:["reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/empty-star.png"],reviews:"3,197 reviews",sal:"Salaries",ques:"Questions",open_job:"Open jobs"},
     {img_url:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/3e9d43f5c277de169808abdcaf49ba2c",
     name:"Amazon.com",star_img:["reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star-half.png","reviews_page_all_image/empty-star.png"],reviews:"8,584 reviews",sal:"Salaries",ques:"Questions",open_job:"Open jobs"},
     {img_url:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/c1e88bb71d075bbc247a2dd8ffeb4b75",
     name:"HDFC Bank",star_img:["reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star-half.png","reviews_page_all_image/empty-star.png"],reviews:"7,052 reviews",sal:"Salaries",ques:"Questions",open_job:"Open jobs"},
     {img_url:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/6dab2f9e01e4bb467ce4416015c323e8",
     name:"Kotak Mahindra Bank",star_img:["reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star-half.png","reviews_page_all_image/empty-star.png"],reviews:"2,003 reviews",sal:"Salaries",ques:"Questions",open_job:"Open jobs"},
     {img_url:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/7502c4fab3c11f90ed12b06b5e7b138d",
     name:"BOSCH",star_img:["reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/empty-star.png"],reviews:"6,539 reviews",sal:"Salaries",ques:"Questions",open_job:"Open jobs"},
     {img_url:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/46105bb1392fe4bdf5127cb50b19e04c",
     name:"Ride Swiggy",star_img:["reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star-half.png","reviews_page_all_image/empty-star.png"],reviews:"335 reviews",sal:"Salaries",ques:"Questions",open_job:"Open jobs"},
     {img_url:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/c0bbcf736db51585b833fd597afda32e",
     name:"Adani Group",star_img:["reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/empty-star.png"],reviews:"371 reviews",sal:"Salaries",ques:"Questions",open_job:"Open jobs"},
     {img_url:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/a64f48d11ba0b7bfe53d35404b2612e0",
     name:"Syntel",star_img:["reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star-half.png","reviews_page_all_image/empty-star.png"],reviews:"2,027 reviews",sal:"Salaries",ques:"Questions",open_job:"Open jobs"},
     {img_url:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/fb654fa4c9b406db9ceb5c2be3117b60",
     name:"KPMG",star_img:["reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star.png","reviews_page_all_image/star-half.png","reviews_page_all_image/empty-star.png"],reviews:"7,369 reviews",sal:"Salaries",ques:"Questions",open_job:"Open jobs"}

]
display();
function display(){
    arr.forEach(function(ele,index){
        var box = document.createElement("div");
        box.setAttribute("id","box");
        var separator = document.createElement("div");
        separator.setAttribute("id","separator");
        var img_box= document.createElement("img-box");
        img_box.setAttribute("id","img-box");
        var name_rev_box = document.createElement("div");
        name_rev_box.setAttribute("id","name-rev-box");
        var link_separator = document.createElement("div");
        link_separator.setAttribute("id","link-separator");
        var image = document.createElement("img");
        image.setAttribute("src",ele.img_url);
        image.setAttribute("alt",index);
        var name = document.createElement("h4");
        name.innerText = ele.name;
        var star1 = document.createElement("img");
        star1.setAttribute("src",ele.star_img[0]);
        star1.setAttribute("alt",index);
        var star2 = document.createElement("img");
        star2.setAttribute("src",ele.star_img[1]);
        star2.setAttribute("alt",index);
        var star3 = document.createElement("img");
        star3.setAttribute("src",ele.star_img[2]);
        star3.setAttribute("alt",index);
        var star4 = document.createElement("img");
        star4.setAttribute("src",ele.star_img[3]);
        star4.setAttribute("alt",index);
        var star5 = document.createElement("img");
        star5.setAttribute("src",ele.star_img[4]);
        star5.setAttribute("alt",index);
        var review = document.createElement("a");
        review.setAttribute("href","");
        review.innerText = ele.reviews;
        var salary = document.createElement("a");
        salary.setAttribute("href","");
        salary.innerText = ele.sal;
        var question = document.createElement("a");
        question.setAttribute("href","");
        question.innerText = ele.ques;
        var open_job = document.createElement("a");
        open_job.setAttribute("href","");
        open_job.innerText = ele.open_job;
        img_box.append(image);
        link_separator.append(salary,question,open_job);
        name_rev_box.append(name,star1,star2,star3,star4,star5,review);
        separator.append(img_box,name_rev_box);
        box.append(separator,link_separator);
        document.getElementById("companies-box").append(box);

    });
}
function findcompany(){
    var company_name = document.getElementById("find-company").value;
    var index=-1;
    arr.forEach(function(ele,i){
        if(ele.name==company_name){
            index=i;
            return;
        }
    });
    if(index>=0){
        var box = document.createElement("div");
        box.setAttribute("id","box");
        var separator = document.createElement("div");
        separator.setAttribute("id","separator");
        var img_box= document.createElement("img-box");
        img_box.setAttribute("id","img-box");
        var name_rev_box = document.createElement("div");
        name_rev_box.setAttribute("id","name-rev-box");
        var link_separator = document.createElement("div");
        link_separator.setAttribute("id","link-separator");
        var image = document.createElement("img");
        image.setAttribute("src",arr[index].img_url);
        image.setAttribute("alt",index);
        var name = document.createElement("h4");
        name.innerText = arr[index].name;
        var star1 = document.createElement("img");
        star1.setAttribute("src",arr[index].star_img[0]);
        star1.setAttribute("alt",index);
        var star2 = document.createElement("img");
        star2.setAttribute("src",arr[index].star_img[1]);
        star2.setAttribute("alt",index);
        var star3 = document.createElement("img");
        star3.setAttribute("src",arr[index].star_img[2]);
        star3.setAttribute("alt",index);
        var star4 = document.createElement("img");
        star4.setAttribute("src",arr[index].star_img[3]);
        star4.setAttribute("alt",index);
        var star5 = document.createElement("img");
        star5.setAttribute("src",arr[index].star_img[4]);
        star5.setAttribute("alt",index);
        var review = document.createElement("a");
        review.setAttribute("href","");
        review.innerText = arr[index].reviews;
        var salary = document.createElement("a");
        salary.setAttribute("href","");
        salary.innerText = arr[index].sal;
        var question = document.createElement("a");
        question.setAttribute("href","");
        question.innerText = arr[index].ques;
        var open_job = document.createElement("a");
        open_job.setAttribute("href","");
        open_job.innerText = arr[index].open_job;
        img_box.append(image);
        link_separator.append(salary,question,open_job);
        name_rev_box.append(name,star1,star2,star3,star4,star5,review);
        separator.append(img_box,name_rev_box);
        box.append(separator,link_separator);
        box.style.width = "300px";
        box.style.marginBottom = "30px";
        var h2 = document.createElement("h2");
        h2.innerText = "Searched Company";
        document.getElementById("display-search").append(h2,box);
    }
    else{
        alert("Company Not Found\nCheck company name")
    }

}
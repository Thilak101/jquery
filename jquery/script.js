// first jquery

// $(document).ready(function() {
//     document.write("sample project")
// })

// jquery selectors

// element seletor, class selector, id selector

// $(document).ready(() => {
//     $(".show").click(() => {
//         $("div").show()
//     })

//     $("#hide").click(() => {
//         $("div").hide()
//     })
// })

// slide an element in jquery

// slide down, slide up, slide toggle

// $(document).ready(() => {
//   $("#slide").click(() => {
//     $("#myDiv").slideDown("fast");
//   });
// });

// $(document).ready(() => {
//     $("#slide").click(() => {
//       $("#myDiv").slideUp("fast");
//     });
//   });

// $(document).ready(() => {
//     $("#slide").click(() => {
//       $("#myDiv").slideToggle("fast");
//     });
//   });

// animation

// $(document).ready(() => {
//     $("button").click(() => {
//         $(".myDiv").animate({
//             left: "500px",
//             height: "100px",
//             width: "100px",
//             fontSize: "10px"
//         })
//     })
// })

// traversing  (parent, parents, parentsUntil, children, find)
// $(document).ready(() => {
//     $("ul").parentsUntil().css({
//         "background": "skyblue",
//         "color": "white",
//         "border": "2px solid red",
//         "padding": "10px"
//     })
// })

// $(document).ready(() => {
//     $("ul").find("li").css({
//         "background": "skyblue",
//         "color": "white",
//         "border": "2px solid red",
//         "padding": "10px"
//     })
// })

// set content (text, html, val)
// $(document).ready(() => {
//     $(".textBtn").click(() => {
//         $(".myDiv").text("This is a demo text")
//     })
// })

// $(document).ready(() => {
//     $(".htmlBtn").click(() => {
//         $(".myDiv").html("<h1>This is a demo text</h1>")
//     })
// })

// $(document).ready(() => {
//     $(".valBtn").click(() => {
//         $(".input").val("Some thing")
//     })
// })

// add class addClass() attr() removeClass() removeAttr()

// $(document).ready(() => {
//     $("div").attr("id", "idDiv")
// })

// $(document).ready(() => {
//     $("div, h1, h2").addClass("class1 class2")
// })

// $(document).ready(() => {
//     $("h2").removeAttr("class")
// })

// get class

// $(document).ready(() => {
//   console.log($(".myDiv").css("backgroundColor"));
//   console.log($(".myDiv").attr("class"))
// });

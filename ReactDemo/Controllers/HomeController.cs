using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactDemo.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactDemo.Controllers
{
    public class HomeController : Controller
    {
        private static List<CommentModel> comments;
        private static IndexViewModel viewModel;
        static HomeController()
        {
            comments = new List<CommentModel>()
            {
                new CommentModel()
                {
                    Author = "Author1",
                    Id = 1,
                    Text = "Text1 From Author1"
                }
            };
            viewModel = new IndexViewModel()
            {
                Component1 = new ReactComponentModel(),
                Component2 = new ReactComponentModel()
                {
                    ComponentName = "Components.Greet",
                    Props = new
                    {
                        BadProp = true
                    }
                },
                Component3 = new ReactComponentModel()
                {
                    ComponentName = "Components.Greet",
                    Props = new
                    {
                        Name = "Person 3"
                    }
                },
                CommentsComponent = new ReactComponentModel()
                {
                    ComponentName = "Components.CommentsBox",
                    Props = new
                    {
                        initialData = comments,
                        pollInterval = 2000
                    }
                }
            };
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(viewModel);
        }

        [Route("comments")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Comments()
        {
            return Json(comments);
        }

        [Route("comments/new")]
        [HttpPost]
        public IActionResult AddComment(CommentModel comment)
        {
            comment.Id = comments.Count + 1;
            comments.Add(comment);
            return Content("Success :)");
        }
    }
}

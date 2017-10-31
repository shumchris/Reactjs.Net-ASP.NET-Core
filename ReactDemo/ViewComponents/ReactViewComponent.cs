using Microsoft.AspNetCore.Mvc;
using React;
using ReactDemo.Models;
using System.Threading.Tasks;

namespace ReactDemo.ViewComponents
{
    [ViewComponent(Name = "React")]
    public class ReactViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(ReactComponentModel model)
        {
            return View(model);
        }
    }
}

using Microsoft.AspNetCore.Mvc;

namespace OpenGym.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciseController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Exercise>>> GetExercises()
        {
            return new List<Exercise>
            {
                new Exercise
                {
                    Name = "Bench Press",
                    Description = "Lay on your back on a bench and press the barbell up.",
                    MuscleGroup = "Chest",
                    Equipment = "Barbell",
                    Difficulty = "Easy",
                    MediaLocation = "https://www.youtube.com/embed/EUjh50tLlBo"
                }
            };
        }
    }
}

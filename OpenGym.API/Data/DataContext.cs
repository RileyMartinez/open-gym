using Microsoft.EntityFrameworkCore;

namespace OpenGym.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Exercise> Exercises => Set<Exercise>();
    }
}

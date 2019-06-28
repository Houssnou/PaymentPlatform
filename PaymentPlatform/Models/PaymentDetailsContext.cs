using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class PaymentDetailsContext:DbContext
    {
        public PaymentDetailsContext(DbContextOptions<PaymentDetailsContext> options):base(options)
        {
                
        }

        public DbSet<PaymentDetails> PaymentDetails { get; set; }
    }
}

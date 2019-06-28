using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PaymentPlatform.Models
{
    public class PaymentDetailsContext:DbContext
    {
        public PaymentDetailsContext(DbContextOptions<PaymentDetailsContext> options):base(options)
        {
                
        }
    }
}

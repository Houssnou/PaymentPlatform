using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class PaymentDetails
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string CardOwner { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(16)")]
        public string CardNumber { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(5)")]
        public string CardExpirationDate { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(3)")]
        public string CardCvv { get; set; }
    }
}

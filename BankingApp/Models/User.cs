//jon gouspy 74538
namespace BankingApp.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;

    public partial class User
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public User()
        {
            this.Accounts = new HashSet<Account>();
        }
    
        public int Id { get; set; }
        [DisplayName("First Name")]
        [Required(ErrorMessage = "This Field is Required")]
        public string FirstName { get; set; }
        [DisplayName("Last Name")]
        [Required(ErrorMessage = "This Field is Required")]
        public string LastName { get; set; }
        public string Email { get; set; }
        [DataType(DataType.Password)]
        [Required(ErrorMessage = "This Field is Required")]
        public string Pin { get; set; }
        [DisplayName("Account Number")]
        public string AccountNumber { get; set; }
        public byte UserType { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Account> Accounts { get; set; }

        public string LoginErrorMessage { get; set; }

        public enum EUserType
        {
            Administrator,
            Customer,
        }
    }
}

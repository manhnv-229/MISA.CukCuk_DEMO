using System;
using System.Collections.Generic;

namespace MISA.CukCuk.Models
{
    public partial class Employee
    {
        public Guid EmployeeId { get; set; }
        public string EmployeeCode { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public int? Gender { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string CitizenIdentityCode { get; set; }
        public string CitizebIdentityPlace { get; set; }
        public DateTime? CitizebIdentityDate { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int? WorkState { get; set; }
        public Guid? PositionId { get; set; }
        public Guid? DepartmentId { get; set; }
        public string SelfTaxCode { get; set; }
        public double? Salary { get; set; }
        public DateTime? JoinDate { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string CreatedBy { get; set; }

        public virtual Department Department { get; set; }
        public virtual Position Position { get; set; }
    }
}

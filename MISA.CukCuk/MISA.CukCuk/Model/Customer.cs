using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.CukCuk.Model
{
    /// <summary>
    /// Khách hàng
    /// CreatedBy: NVMANH (27/07/2020)
    /// </summary>
    public class Customer
    {
        #region "DECLARE"
        /// <summary>
        /// Danh sách khách hàng (Fixed)
        /// </summary>
        /// CreatedNy: NVMANH (27/07/2020)
        public static List<Customer> ListCustomer = new List<Customer>()
        {
            new Customer(){CustomerCode="KH0001", CustomerName ="Nguyễn Văn Mạnh", Birthday = new DateTime(1989,8,15), DebitAmount = new Random().Next(10000,10000000),Is5FoodMember= true||false},
            new Customer(){CustomerCode="KH0002", CustomerName ="Nguyễn Thị Mai", Birthday = new DateTime(1990,8,23), DebitAmount = new Random().Next(10000,10000000),Is5FoodMember= true||false},
            new Customer(){CustomerCode="KH0003", CustomerName ="Nguyễn Thị Trang", Birthday = new DateTime(1989,8,23), DebitAmount = new Random().Next(10000,10000000),Is5FoodMember= true||false},
            new Customer(){CustomerCode="KH0004", CustomerName ="Nguyễn Thị Thảo", Birthday = new DateTime(1989,4,1), DebitAmount = new Random().Next(10000,10000000),Is5FoodMember= true||false},
            new Customer(){CustomerCode="KH0005", CustomerName ="Trần Minh Hải", Birthday = new DateTime(1997,8,23), DebitAmount = new Random().Next(10000,10000000),Is5FoodMember= true||false},
            new Customer(){CustomerCode="KH0006", CustomerName ="Nông Thị Thơm", Birthday = new DateTime(1995,8,23), DebitAmount = new Random().Next(10000,10000000),Is5FoodMember= true||false},
            new Customer(){CustomerCode="KH0007", CustomerName ="Nguyễn Quang Cường", Birthday = new DateTime(1979,8,23), DebitAmount = new Random().Next(10000,10000000),Is5FoodMember= true||false},
            new Customer(){CustomerCode="KH0008", CustomerName ="Bùi Mạnh Linh", Birthday = new DateTime(2000,8,23), DebitAmount = new Random().Next(10000,10000000),Is5FoodMember= true||false},
            new Customer(){CustomerCode="KH0009", CustomerName ="Nguyễn Hoàng Anh", Birthday = new DateTime(1982,4,1), DebitAmount = new Random().Next(10000,10000000),Is5FoodMember= true||false},
        };
        #endregion

        #region "Constructor"
        /// <summary>
        /// Hàm khởi tạo
        /// </summary>
        public Customer()
        {
            CustomerID = Guid.NewGuid();
        }
        #endregion

        #region Property
        /// <summary>
        /// Khóa chính (ID khách hàng)
        /// </summary>
        public Guid? CustomerID { get; set; }

        /// <summary>
        /// Mã khách hàng
        /// </summary>
        public string CustomerCode { get; set; }

        /// <summary>
        /// Tên khách hàng
        /// </summary>
        public string CustomerName { get; set; }

        /// <summary>
        /// Ngày sinh
        /// </summary>
        public DateTime Birthday { get; set; }

        /// <summary>
        /// Số điện thoại
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Số tiền nợ
        /// </summary>
        public decimal? DebitAmount { get; set; }

        /// <summary>
        /// Là thành viên 5Food (true- là thành viên, false- không phải là thành viên)
        /// </summary>
        public bool Is5FoodMember { get; set; }
        #endregion

        #region Method - Function
        /// <summary>
        /// Lấy danh sách khách hàng
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: NVMANH (27/07/2020)
        public List<Customer> GetCustomers()
        {
            return Customer.ListCustomer;
        }
        #endregion
    }
}

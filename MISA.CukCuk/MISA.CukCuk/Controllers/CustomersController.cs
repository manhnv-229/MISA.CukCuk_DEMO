using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MISA.CukCuk.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.CukCuk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        /// <summary>
        /// Lấy danh sách khách hàng
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: NVMANH (29/07/2020)
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return Customer.ListCustomer;
        }

        /// <summary>
        /// Lấy thông tin khách hàng theo id
        /// </summary>
        /// <param name="customerId">id của khách hàng</param>
        /// <returns></returns>
        /// CreatedBy: NVMANH (29/07/2020)
        [HttpGet("{customerId}")]
        public Customer Get(Guid customerId)
        {
            var customer = Customer.ListCustomer.Where(c => c.CustomerID == customerId).FirstOrDefault();
            return customer;
        }

        /// <summary>
        /// Thêm mới khách hàng vào CSDL
        /// </summary>
        /// <param name="customer">Khách hàng</param>
        /// CreatedBy: NVMANH (29/07/2020)
        [HttpPost]
        public void Post([FromBody] Customer customer)
        {
            Customer.ListCustomer.Add(customer);
        }

        /// <summary>
        /// Sửa thông tin khách hàng
        /// </summary>
        /// <param name="customerId">id khách hàng</param>
        /// <param name="customer">Thông tin mới của khách hàng</param>
        /// CreatedBy: NVMANH (29/07/2020)
        [HttpPut("{customerId}")]
        public Customer Put(Guid customerId, [FromBody] Customer customer)
        {
            customer.CustomerID = customerId;
            var currentCustomer = Customer.ListCustomer.Where(c => c.CustomerID == customerId).FirstOrDefault();
            Customer.ListCustomer.Remove(currentCustomer);
            Customer.ListCustomer.Add(customer);
            return customer;
        }

        /// <summary>
        /// Thực hiện xóa dữ liệu
        /// </summary>
        /// <param name="customerId"></param>
        [HttpDelete("{customerId}")]
        public void Delete(Guid customerId)
        {
            var currentCustomer = Customer.ListCustomer.Where(c => c.CustomerID == customerId).FirstOrDefault();
            Customer.ListCustomer.Remove(currentCustomer);
        }
    }
}

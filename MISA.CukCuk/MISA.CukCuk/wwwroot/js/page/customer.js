
$(document).ready(function () {
    //load dữ liệu:
    customerJs = new CustomerJS();
})

/**
 * Object JS quản lý các sự kiện cho trang danh mục khách hàng.
 * */
class CustomerJS {
    constructor() {
        try {
            var me = this;
            me.loadData();
            me.initEvent();
        } catch (e) {

        }
       
    }

    /**
     * Thực hiện gán các sự kiện cho các thành phần trong trang
     * CreatedBy: NVMANH (23/07/2020)
     * */
    initEvent() {

        //$("#btnAdd").click(this.showDialog);
        $("#btnAdd").on("click", 1, this.toolbarItemOnClick);
        $("#btnEdit").on("click", 2, this.toolbarItemOnClick);
        //$("#btnEdit").click(this.showDialog);
        $("#btnClose").click(this.btnCloseOnClick);
        $("#btnCloseHeader").click(this.btnCloseHeaderOnClick);
        $("#btnSave").click(this.saveData.bind(this));
        //$("tr").click(this.rowOnClick);
        $("table").on("click", "tbody tr", 9999999, this.rowOnClick);
    }

    ///**
    // * Sự kiện khi click button thêm mới
    // * CreatedBy: NVMANH (23/07/2020)
    // * */
    //btnAddToolbarOnClick() {
    //    $("#frmDialogDetail").show();
    //}

    //btnEditToolbarOnClick() {
    //    $("#frmDialogDetail").show();
    //}

    toolbarItemOnClick(sender) {
        try {
            var formMode = sender.data;
            switch (formMode) {
                case Enum.FormMode.Add:
                    break;
                case Enum.FormMode.Edit:
                    alert("Sửa dữ liệu");
                    break;
                default:
            }
            $("#frmDialogDetail").show();
            $('#frmDialogDetai input')[0].focus();
        } catch (e) {

        }
       
    }
    /**
    * Sự kiện khi click button đóng dưới footer của Dialog
    * CreatedBy: NVMANH (23/07/2020)
    * */
    btnCloseOnClick() {
        $("#frmDialogDetail").hide();
    }

    /**
    * Sự kiện khi click Đóng trên tiêu đề của Dialog
    * CreatedBy: NVMANH (23/07/2020)
    * */
    btnCloseHeaderOnClick() {
        $("#frmDialogDetail").hide();
    }

    /**
    * Sự kiện khi click chọn 1 dòng trong table
    * CreatedBy: NVMANH (23/07/2020)
    * */
    rowOnClick(sender) {
        this.classList.add("row-selected");
        $(this).siblings().removeClass("row-selected");
       
    }
    /**
    * Load dữ liệu
    * CreatedBy: NVMANH (20/07/2020)
    * */
    loadData() {
        try {
            $('table#tbListCustomer tbody').empty();
            // Lấy dữ liệu về:
            var data = fakeData;
            // Đọc dữ liệu và gen dữ liệu từng khách hàng với HTML:
            $.each(data, function (index, item) {
                var customerInfoHTML = `<tr>
                                <td>`+ item['CustomerCode'] + `</td>
                                <td>`+ item['CustomerName'] + `</td>
                                <td class="align-center">`+ commonJS.formatDate(item['Birthday']) + `</td>
                                <td>`+ item['PhoneNumber'] + `</td>
                                <td class="align-right">`+ commonJS.formatMoney(item['DebitAmount']) + `</td>
                                <td class="align-center">`+ commonJS.buildCheckBoxByValue(item['Is5FoodMember']) + `</td>
                            </tr>`;
                $('table#tbListCustomer tbody').append(customerInfoHTML);
            })
        } catch (e) {
            console.log(e);
        }
        
    }

    /**
     * Cất dữ liệu
     * CreatedBy: NVMANH (21/07/2020)
     * */
    saveData(sender, a, b, c) {
        debugger;
        // Lấy dữ liệu được nhập từ các input:
        var customerCode = $("#txtCustomerCode").val(),
            customerName = $("#txtCustomerName").val(),
            bithday = $("#dtBirthday").val(),
            mobile = $("#txtMobile").val(),
            debitAmount = $("#txtDebitAmount").val(),
            is5Food = $("#ckIs5FoodMember").is(":checked");

        // Từ các dữ liệu thu thập được thì build thành object khách hàng (customer)
        var customer = {
            CustomerCode: customerCode,
            CustomerName: customerName,
            Birthday: new Date(bithday),
            PhoneNumber: mobile,
            DebitAmount: debitAmount,
            Is5FoodMember: is5Food
        };
        // Lưu dữ liệu vào database:
        fakeData.push(customer);
        // Hiển thị thông báo cất thành công/ thất bại:
        alert("Cất thành công!")
        // Đóng/ ẩn Form:
        $("#frmDialogDetail").hide();
        // load lại dữ liệu
        this.loadData();
    }
}

var fakeData = [
    {
        CustomerCode: "KH0001",
        CustomerName: "Nguyễn Văn Mạnh",
        Birthday: new Date(1989, 5, 1),
        PhoneNumber: "0977340334",
        DebitAmount: 10000000,
        Is5FoodMember: false
    },
    {
        CustomerCode: "KH0002",
        CustomerName: "Nguyễn Văn Mạnh",
        Birthday: new Date(1989, 5, 1),
        PhoneNumber: "0977340334",
        DebitAmount: 10000000,
        Is5FoodMember: true
    },
    {
        CustomerCode: "KH0003",
        CustomerName: "Nguyễn Văn Mạnh",
        Birthday: new Date(1989, 5, 1),
        PhoneNumber: "0977340334",
        DebitAmount: 10000000,
        Is5FoodMember: false
    },
    {
        CustomerCode: "KH0004",
        CustomerName: "Nguyễn Văn Mạnh",
        Birthday: new Date(1989, 5, 1),
        PhoneNumber: "0977340334",
        DebitAmount: 10000000,
        Is5FoodMember: true
    },

]

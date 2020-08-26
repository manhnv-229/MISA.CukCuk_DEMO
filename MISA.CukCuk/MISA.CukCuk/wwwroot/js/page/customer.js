$(document).ready(function () {
    // Gán sự kiện:
    initEvent();

    // Load dữ liệu:
    loadData();
})

// Gán sự kiện
// CreatedBy: NVMANH (20/07/2020)
function initEvent() {
    // Gán sự kiện click cho button Thêm:
    $('#btnAdd').click(btnAddOnClick);
    // Gán sự kiện cho các Element:
    $('table#tbListCustomer').on('click', 'tr', rowOnClick);
    $('#btnCancelDialog').click(btnCancelDialogOnClick);
    $('#btnCloseHeader').click(btnCancelDialogOnClick);
    $('#btnEdit').click(btnEditOnClick);
    $('#btnSaveDetail').click(btnSaveDetailOnClick);
    //$('tr').click(function () {
    //    $(this).siblings().removeClass('bg-red');
    //    $(this).addClass('bg-red');
    //    //$(this).siblings().css({ 'background-color': '' });
    //    //$('table#tbListCustomer tbody tr').css({ 'background-color': '' });
    //    //$(this).css('background-color', 'red');
    //})
}

// Load dữ liệu
// CreatedBy: NVMANH (20/07/2020)
function loadData() {
    // Làm trống tbody để gen dữ liệu mới:
    $('table#tbListCustomer tbody').empty();
    // Lấy dữ liệu:
    var data = customers;

    // Hiển thị dữ liệu lên giao diện -> table
    //1. Xác định chuỗi HTML sẽ được bắn vào element nào trong trang:

    for (var i = 0; i < data.length; i++) {
        var currentCustomer = data[i];
        var checkbox = `<input type="checkbox" />`;
        if (currentCustomer.Is5FoodMember) {
            checkbox = `<input type="checkbox" checked />`;
        }
        var dateOfBirth = currentCustomer.DateOfBirth;
        var dateString = formatDate(dateOfBirth);
        var trHTML = $(`<tr class="grid-row">
                                <td class="grid-cell-inner">`+ currentCustomer.CustomerCode + `</td>
                                <td class="grid-cell-inner">`+ currentCustomer.FullName + `</td>
                                <td class="grid-cell-inner align-center">`+ dateString + `</td>
                                <td class="grid-cell-inner">`+ currentCustomer.PhoneNumber + `</td>
                                <td class="grid-cell-inner align-right">`+ currentCustomer.DebitMoney + `</td>
                                <td class="grid-cell-inner">`+ checkbox + `</td>
                            </tr>`);
        trHTML.data('dataKey', currentCustomer);
        trHTML.data('id', currentCustomer.CustomerCode);
        $('table#tbListCustomer tbody').append(trHTML);
    }
}

function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var dateString = day + '/' + month + '/' + year;
    return dateString;
}

function btnAddOnClick() {
    $('#frmDialogDetail').show();
}


function rowOnClick() {
    $(this).siblings().removeClass('bg-red row-selected');
    $(this).addClass('bg-red row-selected');
}

function btnCancelDialogOnClick(){
    $('#frmDialogDetail').hide();
}

function btnSaveDetailOnClick() {
    // Build object khách hàng:
    var customerCode = $('#txtCustomerCode').val();
    var customerName = $('#txtCustomerName').val();
    var groupCustomerName = $('#txtGroupCustomerName').val();
    var phoneNumer = $('#txtPhoneNumber').val();
    var dateOfBirth = $('#dtDateOfBirth').val();
    var array = [customerCode, customerName, groupCustomerName, phoneNumer, dateOfBirth];
    var is5FoodMember = $('#ckIs5FoodMember').is(":checked");
    var debitMoney = $('#txtDebitMoney').val();
    var newCustomer = {
        CustomerCode: customerCode,
        FullName: customerName,
        GroupCustomerName: groupCustomerName,
        DateOfBirth: dateOfBirth,
        PhoneNumber: phoneNumer,
        DebitMoney: debitMoney,
        Is5FoodMember: is5FoodMember
    }
    // Thêm vào database:
    customers.push(newCustomer);
    // Ẩn form chi tiết:
    $('#frmDialogDetail').hide();
    // Load lại dữ liệu chi tiết trên màn hình danh sách:
    loadData();
    console.log(customers);
}

function btnEditOnClick() {
    // Lấy dòng được chọn trên danh sách - nếu không có dòng nào được chọn thì hiển thị cảnh bào:
    var recordSelected = $('#tbListCustomer .row-selected').first();
    if (recordSelected.length == 0) {
        alert('Bạn chưa chọn khác hàng nào, vui lòng chọn khách hàng muốn thực hiện chỉnh sửa!');
        return;
    }
    
    console.log(recordSelected.data());
    //var recordSelected = $('#tbListCustomer').find('.row-selected').first();
    // Thu thập thông tin khách hàng được chọn:
    var customerSelected = recordSelected.data('dataKey');
    // Hiển thị form chi tiết - có binding dữ liệu tương ứng của khách hàng được chọn lên các input nhập liệu:
    var dateString = converDateToYYMMdd(customerSelected.DateOfBirth);
    debugger
    $('#frmDialogDetail').show();
    $('#txtCustomerCode').val(customerSelected.CustomerCode);
    $('#txtCustomerName').val(customerSelected.FullName);
    $('#txtGroupCustomerName').val(customerSelected.GroupCustomerName);
    $('#txtPhoneNumber').val(customerSelected.PhoneNumber);
    $('#txtDebitMoney').val(customerSelected.DebitMoney);
    $('#ckIs5FoodMember').val(customerSelected.Is5FoodMember);
    $('#dtDateOfBirth').val(dateString);

}

function converDateToYYMMdd(date) {
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    if (month<=9) {
        month = '0' + month;
    }
    if (day <= 9) {
        day = '0' + day;
    }
    var dateString = year + '-' + month + '-' + day;
    return dateString;
}
var customers = [
    {
        CustomerCode: "KH0001",
        FullName: 'Nguyễn Văn Mạnh',
        GroupCustomerName: "VIP",
        DateOfBirth: new Date(),
        PhoneNumber: '0977340334',
        DebitMoney: 10000000,
        Is5FoodMember: true
    },
    {
        CustomerCode: "KH0002",
        FullName: 'Nguyễn Văn Hoàng',
        DateOfBirth: new Date(),
        PhoneNumber: '0977340334',
        DebitMoney: 10000000,
        Is5FoodMember: true
    },
    {
        CustomerCode: "KH0003",
        FullName: 'Nguyễn Văn Việt',
        DateOfBirth: new Date(),
        PhoneNumber: '0977340334',
        DebitMoney: 200000,
        Is5FoodMember: false
    }
]
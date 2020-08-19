
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
        var trHTML = `<tr class="grid-row">
                                <td class="grid-cell-inner">`+ currentCustomer.CustomerCode + `</td>
                                <td class="grid-cell-inner">`+ currentCustomer.FullName + `</td>
                                <td class="grid-cell-inner align-center">`+ currentCustomer.DateOfBirth + `</td>
                                <td class="grid-cell-inner">`+ currentCustomer.PhoneNumber + `</td>
                                <td class="grid-cell-inner align-right">`+ currentCustomer.DebitMoney + `</td>
                                <td class="grid-cell-inner">`+ checkbox + `</td>
                            </tr>`;
        console.log(currentCustomer);
        $('table#tbListCustomer tbody').append(trHTML);
    }
}

function btnAddOnClick() {
    $('#frmDialogDetail').show();
}


function rowOnClick() {
    $(this).siblings().removeClass('bg-red');
    $(this).addClass('bg-red');
}
var customers = [
    {
        CustomerCode: "KH0001",
        FullName: 'Nguyễn Văn Mạnh',
        DateOfBirth: '22/09/1989',
        PhoneNumber: '0977340334',
        DebitMoney: 10000000,
        Is5FoodMember: true
    },
    {
        CustomerCode: "KH0002",
        FullName: 'Nguyễn Văn Hoàng',
        DateOfBirth: '22/09/1989',
        PhoneNumber: '0977340334',
        DebitMoney: 10000000,
        Is5FoodMember: true
    },
    {
        CustomerCode: "KH0003",
        FullName: 'Nguyễn Văn Việt',
        DateOfBirth: '22/09/1989',
        PhoneNumber: '0977340334',
        DebitMoney: 200000,
        Is5FoodMember: false
    }
]
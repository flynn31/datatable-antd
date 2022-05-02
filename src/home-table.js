$(document).ready(function () {
	function phone(str) {
		if (!str || str.length != 10) return '';
		return '<i class= "fa fa-phone" ></i>' + ' ' + str.substr(0, 3) + '-' + str.substr(3, 3) + '-' + str.substr(6);
	}
	function renderTimestamp(value, type, row, meta) {
		if (!value) return '';
		if (type != 'display') {
			return value;
		}
		else {
			return new Date(value).toLocaleString('en-us', { timeZoneName: 'short' });
		}
	}
	$('#maintable').DataTable({
		deferRender: true,
		processing: true,
		language: {
			'loadingRecords': '&nbsp;',
			'processing': '<div class="spinner"></div>'
		},
		order: [[1, "desc"]],
		ajax: {
			url: '/agent/api/list-users',
			dataSrc: ""
		},
		columns: [
			{
				render: (data, type, row, meta) => {
					return `
					<div>
			            <i class="user-id">ID: ${row.id}</i>
			            <div>  
				            <b>${row.firstname + ' ' + row.lastname}</b> 
				            <span>${row.emailaddress}</span>
				            ${row.active == 1 ? '<i class="fa fa-check" title="Email Confirmed"></i>' :
							'<i class="fa fa-question" title="Email Not Confirmed"></i>'}
			            </div>
			            <div>
							${phone(row.day_phone)}
							${phone(row.ev_phone)}
							${phone(row.mob_phone)}
			            </div >
						<div>
							${row.emailerror != null ? '<font color="red"><i class="fa fa-hand-stop-o"></i>' + row.emailerror + '</font>' : ''}
			            </div >
				        <div class="user-actions">
				            <a href="activityReport?id=${row.id}&amp;days=7"> <i
				              class="fa fa-newspaper-o" title="View User Activity"></i></a> <a
				              href="agentProxy?userId=${row.id}"> <i
				              class="fa fa-user-md" title="Agent Proxy"></i></a> <a
				              href="editCustomer?act=mod&amp;id=${row.id}">
				              <i class="fa fa-pencil" title="Edit"></i>
				            </a> <a
				              href="editCustomer?act=reconfirm&amp;id=${row.id}">
				              <i class="fa fa-envelope-o" title="Re-Confirm Email"></i>
				            </a> <a
				              href="editCustomerAction?act=del&amp;id=${row.id}"
				              onclick="return confirm('Are you sure you want to delete: ${row.firstname + ' ' + row.lastname}');">
				              <i class="fa fa-trash-o" title="Delete Customer"></i>
				            </a>
				        </div>
			          </div > `;
				}, width: '33%'
			},
			{ render: (data, type, row, meta) => renderTimestamp(row.lastlogindt, type, row, meta) },
			{ render: (data, type, row, meta) => renderTimestamp(row.lastnotificationdt, type, row, meta) },
			{ render: (data, type, row, meta) => renderTimestamp(row.recordcreationdt, type, row, meta) },
			{
				render: (data, type, row, meta) => {
					return `<!-- <i class="fa fa-heart-o" title="Favorites"></i><span>${row.countFavorites}</span>
          					<i class="fa fa-search" title="Saved Searches"></i><span>${row.countSearches}</span> -->
          				    <i class="fa fa-bell" title="Alerts Sent"></i><span>${row.notificationcount || 0}</span>`;
				}
			}
		]
	});
});

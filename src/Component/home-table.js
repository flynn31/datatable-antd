import React, { useState } from 'react';
import moment from 'moment';
import { Table } from 'antd';
import 'antd/dist/antd.css';

export default function Example(props) {
    const data = [];

    const phone = (str) => {
        // console.log("here");
        if (!str || str.length !== 10) return '';
        return (<i class="fa fa-phone" ></i> + ' ' + str.substr(0, 3) + '-' + str.substr(3, 3) + '-' + str.substr(6));
    };

    const columns = [
        {
            title: 'Number',
            dataIndex: 'key',
        },
        {
            title: 'Customer',
            dataIndex: 'customF',
            width: '33%',
            render: text => (
                <div>
                    <i className="user-id">ID: {text.id}</i>
                    <div>
                        <b>{text.firstname + ' ' + text.lastname}</b>
                        <span>{text.emailaddress}</span>
                        {
                            text.active === 1 ?
                                <i className="fa fa-check" title="Email Confirmed"></i> :
                                <i className="fa fa-question" title="Email Not Confirmed"></i>
                        }
                    </div>
                    <div>
                        {phone(text.day_phone)}
                        {phone(text.ev_phone)}
                        {phone(text.mob_phone)}
                    </div >
                    <div>
                        {text.emailerror != null ?
                            <font color="red"><i className="fa fa-hand-stop-o"></i> + {text.emailerror} + </font> :
                            ''}
                    </div >
                    <div className="user-actions">
                        <a href="activityReport?id={text.id}&amp;days=7">
                            <i className="fa fa-newspaper-o" title="View User Activity"></i>
                        </a>
                        <a href="agentProxy?userId={text.id}">
                            <i className="fa fa-user-md" title="Agent Proxy"></i>
                        </a>
                        <a href="editCustomer?act=mod&amp;id={text.id}">
                            <i className="fa fa-pencil" title="Edit"></i>
                        </a>
                        <a href="editCustomer?act=reconfirm&amp;id={text.id}">
                            <i className="fa fa-envelope-o" title="Re-Confirm Email"></i>
                        </a>
                        <a href="editCustomerAction?act=del&amp;id={text.id}"
                        // onClick="return confirm('Are you sure you want to delete: {text.firstname + ' ' + text.lastname}');"
                        >
                            <i className="fa fa-trash-o" title="Delete Customer"></i>
                        </a>
                    </div>
                </div >
            )
        },
        {
            title: 'last visit',
            dataIndex: 'visitF',
            sorter: (a, b) => new Date(a.visitF) - new Date(b.visitF)
        },
        {
            title: 'last alert',
            dataIndex: 'alertF',
            sorter: (a, b) => new Date(a.alertF) - new Date(b.alertF)
        },
        {
            title: 'registered',
            dataIndex: 'regiF',
            sorter: (a, b) => new Date(a.regiF) - new Date(b.regiF)
        }
    ];

    props.data.map(function (item, i) {
        return (
            data.push({
                key: i + 1,
                customF: item,
                visitF: item.visitF,
                alertF: item.alertF,
                regiF: item.regiF,
            })
        );
    })

    return (
        <Table columns={columns} dataSource={data} />
    );
}
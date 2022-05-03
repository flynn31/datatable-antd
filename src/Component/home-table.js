// import React, { useState } from 'react';
import React from 'react';
// import moment from 'moment';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faQuestion, faUserDoctor, faPencil, faHeart, faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper, faEnvelope, faTrashCan } from '@fortawesome/free-regular-svg-icons'

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
                                // <i icon="fa fa-check" title="Email Confirmed">a</i> :
                                <FontAwesomeIcon icon={faCheck} /> :
                                <FontAwesomeIcon icon={faQuestion} />
                        }
                    </div>
                    <div>
                        {phone(text.day_phone)}
                        {phone(text.ev_phone)}
                        {phone(text.mob_phone)}
                    </div >
                    <div>
                        {text.emailerror != null ?
                            <font color="red"><FontAwesomeIcon icon={faCheck} /> + {text.emailerror} + </font> :
                            ''}
                    </div >
                    <div className="user-actions">
                        <a href="activityReport?id={text.id}&amp;days=7">
                            <FontAwesomeIcon icon={faNewspaper} />
                            <FontAwesomeIcon icon={faUserDoctor} />
                        </a>
                        <a href="agentProxy?userId={text.id}">
                            {/* <FontAwesomeIcon icon={faUserMinus} /> */}
                        </a>
                        <a href="editCustomer?act=mod&amp;id={text.id}">
                            <FontAwesomeIcon icon={faPencil} />
                        </a>
                        <a href="editCustomer?act=reconfirm&amp;id={text.id}">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="editCustomerAction?act=del&amp;id={text.id}"
                        // onClick="return confirm('Are you sure you want to delete: {text.firstname + ' ' + text.lastname}');"
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
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
        },
        {
            title: 'others',
            dataIndex: 'otherF',
            sorter: (a, b) => new Date(a.otherF) - new Date(b.otherF),
            render: text => (
                <div>
                    <FontAwesomeIcon icon={faHeart} /><span>{text.countFavorites}</span>
                    <FontAwesomeIcon icon={faSearch} /><span>{text.countSearches}</span>
                    <FontAwesomeIcon icon={faBell} /><span>{text.notificationcount}</span>
                </div>
            )
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
                otherF: item
            })
        );
    })

    return (
        <Table columns={columns} dataSource={data} />
    );
}
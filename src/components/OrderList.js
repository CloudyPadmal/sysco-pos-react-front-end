import React, { Component } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom'
import { GET_THE_COMPLETE_ITEMS_LIST } from '../actions/itemcontrolactions';
import { GET_THE_ORDER_LIST_FOR_THIS_USER } from '../actions/ordercontrolactions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleOrder from './SingleOrder';

class OrderList extends Component {

    componentDidMount() {
        this.props.GET_THE_COMPLETE_ITEMS_LIST(this.props.PASSKEY);
        this.props.GET_THE_ORDER_LIST_FOR_THIS_USER(this.props.PASSKEY);
    }

    render() {
        if (this.props.PASSKEY === "") {
            return (
                <Redirect to="/login" />
            );
        }
        if (this.props.ORDERLIST.length === 0) {
            return (
                <div className="card" style={{ margin: '25px' }}>
                    <div className="card-body" style={{ padding: '1.25rem 1.25rem 1rem 1.25rem' }}>
                        <h5 className="card-title" style={{ margin: '0.5em 1em 0 0' }}>Order List</h5>
                        <p style={{ marginTop: '10px' }}>No Orders to display. Do you mind creating a <Link to="/create_order">new order</Link>?</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="card" style={{ margin: '25px' }}>
                    <div className="card-body" style={{ padding: '1.25rem 1.25rem 1rem 1.25rem' }}>
                        <h5 className="card-title" style={{ margin: '0.5em 1em 0 0' }}>Order List</h5>
                        {this.props.ORDERLIST.map((order) => (
                            <SingleOrder
                                key={order._id}
                                ORDER={order}
                                PREPARE_TO_EDIT_OR_VIEW_THIS_ORDER={() => { }/* this.props.PREPARE_TO_EDIT_OR_VIEW_THIS_ORDER.bind(this, order._id) */}
                                DELETE_THIS_ORDER={() => { }/* this.props.DELETE_THIS_ORDER.bind(this, order._id) */}
                                SET_THIS_ORDER_AS_CURRENT={() => { }/* this.props.SET_THIS_ORDER_AS_CURRENT.bind(this, order._id) */}
                            />
                        ))}
                    </div>
                </div>
            );
        }
    }
}

OrderList.propTypes = {
    GET_THE_COMPLETE_ITEMS_LIST: PropTypes.func.isRequired,
    GET_THE_ORDER_LIST_FOR_THIS_USER: PropTypes.func.isRequired,
    PASSKEY: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    PASSKEY: state.uac.PASSKEY,
    ORDERLIST: state.ord.ORDERLIST,
    ITMESLIST: state.itm.ITMESLIST
});

export default withRouter(connect(mapStateToProps, {
    GET_THE_COMPLETE_ITEMS_LIST,
    GET_THE_ORDER_LIST_FOR_THIS_USER
})(OrderList));

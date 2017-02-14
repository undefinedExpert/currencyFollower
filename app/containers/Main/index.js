import React from 'react'
import classNames from 'classnames'
import CurrencyMenu from 'containers/CurrencyMenu'


export class Main extends React.Component {
  render () {
    return (
      <div className="container-fluid">
          <div className={classNames('col-md-6')}>
            <div className="row">
              <CurrencyMenu />
            </div>
          </div>
      </div>
    );
  }
}

Main.propTypes = {}

export default Main
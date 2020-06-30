import React from 'react'

export const search = () => {
    return (
        <nav style={{ marginBottom: '30px'}} className="purple">
        <div className="nav-wrapper">
          <form>
            <div clasName="input-field">
              <input id="search" type="search" />
              <label className="label-icon" for="search"><i class="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
}

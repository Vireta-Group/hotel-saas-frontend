// components/MainContent.jsx
import React from "react";
<<<<<<< HEAD

function MainContent({ isSidebarOpen }) {
  return (
    <main>
      <div className="cards">
        <div className="single-card">
          <div>
            <span>EARNINGS (MONTHLY)</span>
            <h2>$40,000</h2>
          </div>
          <i className="uil uil-calender"></i>
        </div>
        <div className="single-card">
          <div>
            <span>EARNINGS (ANNUAL)</span>
            <h2>$215,000</h2>
          </div>
          <i className="uil uil-dollar-sign-alt"></i>
        </div>
        <div className="single-card">
          <div>
            <span>Weekly Sales</span>
            <h2>$47k</h2>
          </div>
          <i className="uil uil-chart-bar"></i>
        </div>
        <div className="single-card">
          <div>
            <span>PENDING REQUESTS</span>
            <h2>18</h2>
          </div>
          <i className="uil uil-comments"></i>
        </div>
      </div>

      <div className="wrapper flex">
        <div className="projects">
          <div className="card-header flex">
            <h3>Recents Projects</h3>
            <button>
              See all <i className="uil uil-angle-right"></i>
            </button>
          </div>

          <table>
            <thead>
              <th>
                <tr>
                  <td>Project Title</td>
                  <td>Department</td>
                  <td>Status</td>
                </tr>
              </th>
            </thead>

            <tbody>
              <tr>
                <td>UI/UX Designer</td>
                <td>UI Team</td>
                <td className="status-box">
                  <span className="status review"></span>review
                </td>
              </tr>
              <tr>
                <td>UI/UX Designer</td>
                <td>UI Team</td>
                <td className="status-box">
                  <span className="status progress"></span>progress
                </td>
              </tr>
              <tr>
                <td>UI/UX Designer</td>
                <td>UI Team</td>
                <td className="status-box">
                  <span className="status pending"></span>pending
                </td>
              </tr>
              <tr>
                <td>UI/UX Designer</td>
                <td>UI Team</td>
                <td className="status-box">
                  <span className="status review"></span>review
                </td>
              </tr>
              <tr>
                <td>UI/UX Designer</td>
                <td>UI Team</td>
                <td className="status-box">
                  <span className="status progress"></span>progress
                </td>
              </tr>
              <tr>
                <td>UI/UX Designer</td>
                <td>UI Team</td>
                <td className="status-box">
                  <span className="status pending"></span>pending
                </td>
              </tr>
              <tr>
                <td>UI/UX Designer</td>
                <td>UI Team</td>
                <td className="status-box">
                  <span className="status review"></span>review
                </td>
              </tr>
              <tr>
                <td>UI/UX Designer</td>
                <td>UI Team</td>
                <td className="status-box">
                  <span className="status progress"></span>progress
                </td>
              </tr>
              <tr>
                <td>UI/UX Designer</td>
                <td>UI Team</td>
                <td className="status-box">
                  <span className="status pending"></span>pending
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="customers">
          <div className="card-header flex">
            <h3>New Customers</h3>
            <button>
              See all <i className="uil uil-angle-right"></i>
            </button>
          </div>

          <table>
            <tr className="flex">
              <td className="flex">
                <img src="images/user.jpeg" width="30px" height="30px" alt="" />
                <div>
                  <h5>Naseem Khan</h5>
                  <small>CEO Expert</small>
                </div>
              </td>

              <td>
                <i className="uil uil-user-circle"></i>
                <i className="uil uil-calender"></i>
                <i className="uil uil-phone-alt"></i>
              </td>
            </tr>
            <tr className="flex">
              <td className="flex">
                <img src="images/user.jpeg" width="30px" height="30px" alt="" />
                <div>
                  <h5>Naseem Khan</h5>
                  <small>CEO Expert</small>
                </div>
              </td>

              <td>
                <i className="uil uil-user-circle"></i>
                <i className="uil uil-calender"></i>
                <i className="uil uil-phone-alt"></i>
              </td>
            </tr>
            <tr className="flex">
              <td className="flex">
                <img src="images/user.jpeg" width="30px" height="30px" alt="" />
                <div>
                  <h5>Naseem Khan</h5>
                  <small>CEO Expert</small>
                </div>
              </td>

              <td>
                <i className="uil uil-user-circle"></i>
                <i className="uil uil-calender"></i>
                <i className="uil uil-phone-alt"></i>
              </td>
            </tr>
            <tr className="flex">
              <td className="flex">
                <img src="images/user.jpeg" width="30px" height="30px" alt="" />
                <div>
                  <h5>Naseem Khan</h5>
                  <small>CEO Expert</small>
                </div>
              </td>

              <td>
                <i className="uil uil-user-circle"></i>
                <i className="uil uil-calender"></i>
                <i className="uil uil-phone-alt"></i>
              </td>
            </tr>
            <tr className="flex">
              <td className="flex">
                <img src="images/user.jpeg" width="30px" height="30px" alt="" />
                <div>
                  <h5>Naseem Khan</h5>
                  <small>CEO Expert</small>
                </div>
              </td>

              <td>
                <i className="uil uil-user-circle"></i>
                <i className="uil uil-calender"></i>
                <i className="uil uil-phone-alt"></i>
              </td>
            </tr>
            <tr className="flex">
              <td className="flex">
                <img src="images/user.jpeg" width="30px" height="30px" alt="" />
                <div>
                  <h5>Naseem Khan</h5>
                  <small>CEO Expert</small>
                </div>
              </td>

              <td>
                <i className="uil uil-user-circle"></i>
                <i className="uil uil-calender"></i>
                <i className="uil uil-phone-alt"></i>
              </td>
            </tr>
            <tr className="flex">
              <td className="flex">
                <img src="images/user.jpeg" width="30px" height="30px" alt="" />
                <div>
                  <h5>Naseem Khan</h5>
                  <small>CEO Expert</small>
                </div>
              </td>

              <td>
                <i className="uil uil-user-circle"></i>
                <i className="uil uil-calender"></i>
                <i className="uil uil-phone-alt"></i>
              </td>
            </tr>
          </table>
        </div>
      </div>
=======
import "../../style/main/main.css";

function MainContent() {
  return (
    <main>
      <h1>this is main</h1>
>>>>>>> omur
    </main>
  );
}

export default MainContent;

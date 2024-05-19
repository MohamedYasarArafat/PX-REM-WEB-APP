import logo from "./logo.png";
import "./App.css";
import { useEffect, useMemo, useState } from "react";
import githubIcon from '../src/github.png'

/**
 * Converts pixel size to rem and accepts the base as second argument. default base is 16px
 *
 * @param {number|string} px
 * @param {number} base
 * @return {string}
 */

function App() {
  const [baseValue, setbaseValue] = useState();
  const [pxValue, setpxValue] = useState();
  const [remValue, setremValue] = useState();

  useEffect(() => {
    setbaseValue(16);
    setpxValue(10);
    ptr(10, 16);
  }, []);

  //Converter functions
  function ptr(px, base) {
    const px_ = px?.toString()?.replace("px", "");
    let x = base || 16,
      rem = (1 / x) * parseFloat(px_);
    if (rem?.toString().includes(".")) {
      console.log(
        'rem?.toString()?.split(".")[1].length',
        rem?.toString()?.split(".")[1].length
      );
      if (rem?.toString()?.split(".")[1].length >= 3) {
        rem = rem.toFixed(3);
      } else if (rem?.toString()?.split(".")[1].length >= 2) {
        rem = rem.toFixed(2);
      } else {
        rem = rem.toFixed(1);
      }
    }
    setremValue(rem);
  }

  return (
    <div className="App">
      <div className="header ">
        <div className="d-flex">
          <img className="app-logo" alt="" src={logo}></img>
        </div>
      </div>
      <div className="content">
        <div className="mb-4">
          <h2>PX to REM converter</h2>
        </div>
        <div className="d-flex w-100 justify-content-center action-content">
          <div className="px-div">
            <div className="text-center">
              <label className="px-label">Pixels</label>
            </div>
            <input
              className="px-input"
              value={pxValue}
              onChange={(e) => {
                setpxValue(e.target.value);
              }}
              onBlur={(e) => {
                ptr(e.target.value, baseValue);
              }}
            ></input>
          </div>
          <div className="rem-div">
            <div className="text-center">
              <label className="px-label">REM</label>
            </div>
            <input className="px-input" value={remValue}></input>
          </div>
        </div>
        <div>
          <div className="base-value">
            Calculation based on a root font-size of{" "}
            <input
              value={baseValue}
              onChange={(e) => {
                setbaseValue(e.target.value > 0 ? e.target.value : "");
              }}
              onBlur={(e) => {
                ptr(pxValue, e.target.value);
              }}
              className="base-value-input"
            ></input>{" "}
            pixel.
          </div>
        </div>
        <div className="table-header">PX ↔︎ REM conversion tables</div>
        <div className="d-flex justify-content-center">
          <div class="conversion-table">
            <table className="px-rem-table">
              <tbody>
                <tr>
                  <th>Pixels</th>
                  <th>REM</th>
                </tr>
                <tr>
                  <td>
                    1<abbr>px</abbr>
                  </td>
                  <td>
                    0.06<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    2<abbr>px</abbr>
                  </td>
                  <td>
                    0.13<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    3<abbr>px</abbr>
                  </td>
                  <td>
                    0.19<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    4<abbr>px</abbr>
                  </td>
                  <td>
                    0.3<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    5<abbr>px</abbr>
                  </td>
                  <td>
                    0.3<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    6<abbr>px</abbr>
                  </td>
                  <td>
                    0.4<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    8<abbr>px</abbr>
                  </td>
                  <td>
                    0.5<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    10<abbr>px</abbr>
                  </td>
                  <td>
                    0.6<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    12<abbr>px</abbr>
                  </td>
                  <td>
                    0.8<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    14<abbr>px</abbr>
                  </td>
                  <td>
                    0.9<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    15<abbr>px</abbr>
                  </td>
                  <td>
                    0.9<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    16<abbr>px</abbr>
                  </td>
                  <td>
                    1<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    18<abbr>px</abbr>
                  </td>
                  <td>
                    1.1<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    20<abbr>px</abbr>
                  </td>
                  <td>
                    1.3<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    24<abbr>px</abbr>
                  </td>
                  <td>
                    1.5<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    25<abbr>px</abbr>
                  </td>
                  <td>
                    1.6<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    28<abbr>px</abbr>
                  </td>
                  <td>
                    1.8<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    32<abbr>px</abbr>
                  </td>
                  <td>
                    2<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    36<abbr>px</abbr>
                  </td>
                  <td>
                    2<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    40<abbr>px</abbr>
                  </td>
                  <td>
                    3<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    44<abbr>px</abbr>
                  </td>
                  <td>
                    3<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    48<abbr>px</abbr>
                  </td>
                  <td>
                    3<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    50<abbr>px</abbr>
                  </td>
                  <td>
                    3<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    56<abbr>px</abbr>
                  </td>
                  <td>
                    4<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    64<abbr>px</abbr>
                  </td>
                  <td>
                    4<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    72<abbr>px</abbr>
                  </td>
                  <td>
                    5<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    75<abbr>px</abbr>
                  </td>
                  <td>
                    5<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    80<abbr>px</abbr>
                  </td>
                  <td>
                    5<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    90<abbr>px</abbr>
                  </td>
                  <td>
                    6<abbr>rem</abbr>
                  </td>
                </tr>
                <tr>
                  <td>
                    100<abbr>px</abbr>
                  </td>
                  <td>
                    6<abbr>rem</abbr>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
        </div>
        <div className="description">Convert pixels to REM</div>
        <div>
          <p>
            This calculator converts pixels to the CSS unit REM. The conversion
            is based on the default font-size of 16 pixel, but can be changed.
            <br />
            With the CSS rem unit you can define a size relative to the
            font-size of the HTML root tag.
          </p>
        </div>
      </div>
      <div className="footer d-flex ">
        <div className="footer-content">Version: 0.1.0</div>
        <div>Follow me on  <a href="https://github.com/MohamedYasarArafat" target="_blank"><img className="github-logo" alt="" src={githubIcon}></img></a></div>
      </div>
    </div>
  );
}

export default App;

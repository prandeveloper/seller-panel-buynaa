import React from "react";
import Wizard from "./ProFormComponent";
import {
  FormGroup,
  Input,
  Label,
  CustomInput,
  InputGroup,
  InputGroupText,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
} from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";
import { RichUtils } from "draft-js";
import Select from "react-select";

class AddMyProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      sku_no: "",
      hsn_sac_no: "",
      discount_perc: 12,
      short_desc: "",
      long_desc: "",
      productcategory: "",
      productsubcategory: "",
      unit: "",
      gstrate: "",
      material: "",
      stock: "",
      size: "",
      color: "",
      brand: "",
      tag: "",
      product_img: "",
      status: "",
      sortorder: "",
      selectedFile: undefined,
      selectedName: "",
      pColour: [],
      pBrand: [],
      productC: [],
      productSC: [],
      units: [],
      pMaterial: [],
      gsts: [],
      pSize: [],
      file: [null],
      imgSrc: [],
    };
    this.submitHandler = this.submitHandler.bind(this);
  }
  async componentDidMount() {
    //Product Category
    axiosConfig
      .get("/getproductCategory")
      .then((response) => {
        console.log(response);
        this.setState({ productC: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Product Sub Category
    axiosConfig
      .get("/getproductsubcategory")
      .then((response) => {
        console.log(response);
        this.setState({ productSC: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //GST
    axiosConfig
      .get("/viewallgst")
      .then((response) => {
        console.log(response);
        this.setState({ gsts: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Units
    axiosConfig
      .get("/viewallunits")
      .then((response) => {
        console.log(response);
        this.setState({ units: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    //Brand
    axiosConfig
      .get("/allbrand")
      .then((response) => {
        console.log(response);
        this.setState({ pBrand: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //colour
    axiosConfig
      .get("/getcolor")
      .then((response) => {
        console.log(response);
        let resultarray = [];
        for (let i = 0; i < response.data.data.length; i++) {
          const element = response.data.data[i];
          delete Object.assign(element, {
            ["value"]: element["_id"],
            ["label"]: element["colorName"],
          })["colorName"];
          resultarray.push(element);
          //console.log(element)
        }
        this.setState({ pColour: response.data.data });
        //console.log(this.state.pColour);
      })
      .catch((error) => {
        console.log(error);
      });

    //size
    axiosConfig
      .get("/getsize")
      .then((response) => {
        console.log(response);
        let resultarray = [];
        for (let i = 0; i < response.data.data.length; i++) {
          const element = response.data.data[i];
          delete Object.assign(element, {
            ["value"]: element["_id"],
            ["label"]: element["sizeName"],
          })["sizeName"];
          resultarray.push(element);
        }
        this.setState({ pSize: resultarray });
      })
      .catch((error) => {
        console.log(error);
      });

    //Material
    axiosConfig
      .get("/getallmaterial")
      .then((response) => {
        console.log(response);
        this.setState({ pMaterial: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files });
    this.setState({ selectedName: event.target.files.name });
    console.log(event.target.files);
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler2 = (e) => {
    this.setState({ stock: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeHandlersize = (e) => {
    console.log(e);
    let emptyarray = [];
    for (let i = 0; i < e.length; i++) {
      const element = e[i].value;
      emptyarray.push(element);
    }
    this.setState({ size: emptyarray });
    console.log(this.state.size);
  };

  changeHandlercolor = (e) => {
    console.log(e);
    let emptyarray = [];
    for (let i = 0; i < e.length; i++) {
      const element = e[i].value;
      emptyarray.push(element);
    }
    this.setState({ color: emptyarray });
    console.log(this.state.color);
  };

  submitHandler = () => {
    //e.preventDefault();
    console.log("submit req");
    console.log(this.state);

    const data = new FormData();
    data.append("product_name", this.state.product_name);
    data.append("sku_no", this.state.sku_no);
    data.append("hsn_sac_no", this.state.hsn_sac_no);
    data.append("short_desc", this.state.short_desc);
    data.append("long_desc", this.state.long_desc);
    data.append("brand", this.state.brand);
    data.append("tag", this.state.tag);
    data.append("productcategory", this.state.productcategory);
    data.append("productsubcategory", this.state.productsubcategory);
    data.append("unit", this.state.unit);
    data.append("gstrate", this.state.gstrate);
    data.append("cost_price", this.state.cost_price);
    data.append("sell_price", this.state.sell_price);
    for (var i = 0; i < this.state.color.length; i++) {
      data.append("color", this.state.color[i]);
    }
    for (var i = 0; i < this.state.size.length; i++) {
      data.append("size", this.state.size[i]);
    }
    //data.append("color", JSON.stringify(this.state.color));
    //data.append("size", JSON.stringify(this.state.size));
    data.append("material", this.state.material);
    data.append("stock", this.state.stock);
    data.append("qty", this.state.qty);
    data.append("reorder_level", this.state.reorder_level);
    data.append("status", this.state.status);
    data.append("sortorder", this.state.sortorder);
    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("product_img", file, file.name);
      }
    }

    for (var key of data.keys()) {
      console.log(key);
    }
    for (var value of data.values()) {
      console.log(value);
    }

    axiosConfig
      .post("/addproduct", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // value = orderOptions(value)
    // this.setState({ value: value })
    // value = orderOptions1(value)
    // this.setState({ value: value })
  };
  onChange(event) {
    this.setState({
      _id: event.value,
      colorName: event.label,
    });
  }

  render() {
    // const favColors = Object.keys(this.state.sizes)
    // .filter(key => this.state.sizes[key])
    // .join(", ");

    const steps = [
      {
        title: "1",
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Product Name</Label>
                <Input
                  type="text"
                  placeholder="productname"
                  name="product_name"
                  value={this.state.product_name}
                  onChange={this.changeHandler}
                  required
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>SKU Code</Label>
                <Input
                  type="number"
                  placeholder="SKU Code"
                  name="sku_no"
                  value={this.state.sku_no}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>HSN / SAC Number</Label>
                <Input
                  type="number"
                  placeholder="HSN/SAC"
                  name="hsn_sac_no"
                  value={this.state.hsn_sac_no}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Short Description</Label>
                <Input
                  type="textarea"
                  name="short_desc"
                  placeholder="Short Description"
                  value={this.state.short_desc}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Long Description</Label>
                <Input
                  type="textarea"
                  name="long_desc"
                  placeholder="Long Description"
                  value={this.state.long_desc}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Brand</Label>
                <CustomInput
                  type="select"
                  name="brand"
                  placeholder="Brandname"
                  value={this.state.brand}
                  onChange={this.changeHandler}
                  required
                >
                  {this.state.pBrand?.map((brandp) => (
                    <option value={brandp?._id} key={brandp?._id}>
                      {brandp?.name}
                    </option>
                  ))}
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Product Tag</Label>
                <CustomInput
                  type="select"
                  placeholder="tag"
                  name="tag"
                  value={this.state.tag}
                  onChange={this.changeHandler}
                  required
                >
                  <option>Add Tag</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Colour</Label>
                <Select
                  isMulti
                  name="color"
                  className="React"
                  classNamePrefix="color"
                  // value={this.state.colour}
                  options={this.state.pColour}
                  onChange={this.changeHandlercolor}
                ></Select>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Size</Label>
                <Select
                  isMulti
                  className="React"
                  classNamePrefix="size"
                  name="size"
                  options={this.state.pSize}
                  onChange={this.changeHandlersize}
                ></Select>
              </FormGroup>
            </Col>

            <Col md="6" sm="12">
              <FormGroup>
                <Label>Material</Label>
                <CustomInput
                  type="select"
                  placeholder="Material"
                  name="material"
                  value={this.state.material}
                  onChange={this.changeHandler}
                >
                  {this.state.pMaterial?.map((materialp) => (
                    <option value={materialp.materialname} key={materialp._id}>
                      {materialp.materialname}
                    </option>
                  ))}
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label className="mb-1">Stock Available</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler2(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="checkbox"
                    name="stock"
                    value="Available"
                  />
                  <span style={{ marginRight: "20px", fontWeight: 800 }}>
                    Available
                  </span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="checkbox"
                    name="stock"
                    value="UnAvailable"
                  />
                  <span style={{ marginRight: "3px", fontWeight: 800 }}>
                    UnAvailable
                  </span>
                </div>
              </FormGroup>
            </Col>
          </Row>
        ),
      },
      {
        title: "2",
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Product Category</Label>
                <CustomInput
                  type="select"
                  name="productcategory"
                  placeholder="category"
                  value={this.state.productcategory}
                  onChange={this.changeHandler}
                >
                  {this.state.productC.map((productCategory) => (
                    <option
                      value={productCategory._id}
                      key={productCategory._id}
                    >
                      {productCategory.name}
                    </option>
                  ))}
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Product Sub Category</Label>
                <CustomInput
                  type="select"
                  name="productsubcategory"
                  placeholder="Subcategory"
                  value={this.state.productsubcategory}
                  onChange={this.changeHandler}
                >
                  {this.state.productSC.map((productSCategory) => (
                    <option
                      value={productSCategory._id}
                      key={productSCategory._id}
                    >
                      {productSCategory.name}
                    </option>
                  ))}
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Stock Quantity</Label>
                <Input
                  type="number"
                  placeholder="Stock Quantity"
                  name="qty"
                  value={this.state.qty}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Re-Order Level</Label>
                <Input
                  type="number"
                  placeholder="Stock Quantity"
                  name="reorder_level"
                  value={this.state.reorder_level}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Units</Label>
                <CustomInput
                  type="select"
                  placeholder="Unit"
                  name="unit"
                  value={this.state.unit}
                  onChange={this.changeHandler}
                >
                  {this.state.units?.map((dUnits) => (
                    <option value={dUnits._id} key={dUnits._id}>
                      {dUnits.units_title}
                    </option>
                  ))}
                </CustomInput>
              </FormGroup>
            </Col>

            <Col md="6" sm="12">
              <FormGroup>
                <Label>Cost Price</Label>
                <InputGroup>
                  <InputGroupText>₹</InputGroupText>
                  <Input
                    type="number"
                    name="cost_price"
                    placeholder="Cost Price"
                    value={this.state.cost_price}
                    onChange={this.changeHandler}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Selling Price</Label>
                <InputGroup>
                  <InputGroupText>₹</InputGroupText>
                  <Input
                    type="number"
                    name="sell_price"
                    placeholder="Selling Price"
                    value={this.state.sell_price}
                    onChange={this.changeHandler}
                  />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col lg="6" md="6" sm="6" className="mb-2">
              <Label>GST Rate</Label>
              <CustomInput
                type="select"
                placeholder="GST Rate"
                name="gstrate"
                value={this.state.gstrate}
                onChange={this.changeHandler}
              >
                {this.state.gsts.map((dGsts) => (
                  <option key={dGsts._id} value={dGsts._id}>
                    {dGsts.gst_title}
                  </option>
                ))}
              </CustomInput>
            </Col>
          </Row>
        ),
      },
      {
        title: 3,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Product Image</Label>
                <CustomInput
                  type="file"
                  onChange={this.onChangeHandler}
                  multiple
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>SortOrder</Label>
                <Input
                  type="number"
                  placeholder=""
                  name="sortorder"
                  value={this.state.sortorder}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>

            <Col lg="6" md="6" sm="6" className="mb-2">
              <Label className="mb-1">Status</Label>
              <div
                className="form-label-group"
                onChange={(e) => this.changeHandler1(e)}
              >
                <input
                  style={{ marginRight: "3px" }}
                  type="radio"
                  name="status"
                  value="Active"
                />
                <span style={{ marginRight: "20px" }}>Active</span>

                <input
                  style={{ marginRight: "3px" }}
                  type="radio"
                  name="status"
                  value="Inactive"
                />
                <span style={{ marginRight: "3px" }}>Inactive</span>
              </div>
            </Col>
          </Row>
        ),
      },
    ];
    //
    return (
      <Card>
        <Row className="m-2">
          <Col>
            <h1 className="float-left">Add My Product</h1>
          </Col>
          <Col>
            <Button
              className=" btn btn-danger float-right"
              onClick={() => history.push("/app/products/product/productsList")}
            >
              Back
            </Button>
          </Col>
        </Row>
        <CardBody>
          <Wizard enableAllSteps onFinish={this.submitHandler} steps={steps} />
        </CardBody>
      </Card>
    );
  }
}

export default AddMyProduct;

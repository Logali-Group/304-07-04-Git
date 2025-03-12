import Controller from "sap/ui/core/mvc/Controller";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import Table from "sap/ui/table/Table";
import { Input$SubmitEvent } from "sap/m/Input";
import ListBinding from "sap/ui/model/ListBinding";

/**
 * @namespace git.controller
 */
export default class Main extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }

    public onFilterSubmit (event : Input$SubmitEvent) : void {

        let sValue = event.getParameter("value");
        let aFilters = [];

        if (sValue) {
            aFilters.push(new Filter({
                filters: [
                    new Filter("ID", FilterOperator.EQ, sValue),
                    new Filter("FullName", FilterOperator.Contains, sValue)
                ],
                and: false
            }))
        }

        let oTable= this.byId("table") as Table;
        let binding = oTable.getBinding("rows") as ListBinding;
        binding.filter(aFilters);

    }
}
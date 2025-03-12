import Controller from "sap/ui/core/mvc/Controller";
import { SearchField$SearchEvent } from "sap/m/SearchField";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import Table from "sap/m/Table";
import ListBinding from "sap/ui/model/ListBinding";

/**
 * @namespace git.controller
 */
export default class Main extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }

    public onFilterSearch (event : SearchField$SearchEvent) : void {

        let sValue = event.getParameter("query");
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
        let binding = oTable.getBinding("items") as ListBinding;
        binding.filter(aFilters);

    }
}
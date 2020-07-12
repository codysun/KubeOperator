import {BaseModel, BaseRequest} from '../../../shared/class/BaseModel';
import {Region} from '../region/region';

export class Zone extends BaseModel {
    id: string;
    name: string;
    vars: string;
    cloudVars: {} = {};
    region: Region = new Region();
}

export class ZoneCreateRequest extends BaseRequest {
    vars: string;
    region: string;
    regionID: string;
    cloudVars: {} = {};
    provider: string;
}

export class ZoneUpdateRequest extends BaseRequest {
    vars: string;
    regionID: string;
    cloudVars: {} = {};
}

export class CloudZoneRequest extends BaseRequest {
    cloudVars: {} = {};
    datacenter: string;
}

export class CloudZone {
    cluster: string;
    networks: [] = [];
    resourcePools: [] = [];
    datastores: [] = [];
    storages: storage[] = [];
    securityGroups: [] = [];
    networkList: Network[] = [];
    floatingNetworkList: Network[] = [];
    ipTypes: [] = [];
    imageList: Image[] = [];
}

export class CloudTemplate {
    imageName: string;
    guestId: string;
}

export class storage {
    id: string;
    name: string;
}

export class Network {
    id: string;
    name: string;
    subnetList: Subnet[] = [];
}

export class Subnet {
    id: string;
    name: string;
}

export class Image {
    id: string;
    name: string;
}





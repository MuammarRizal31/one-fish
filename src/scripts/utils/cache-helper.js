const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  async deleteOldCache() {},

  async revalidateCache(request) {},

  async _openCache() {
    return caches.open("OneFish-V1");
  },
};

export default CacheHelper;

/**
 * Hardmode Interactive
 */
cr.plugins_.CJSAds = function(runtime) {
    this.runtime = runtime;
};
/**
 * C2 plugin
 */
(function() {
        var input_text = "";
        var PurchaseTransactionId = "";
        var PurchaseProductId = "";
        var products_list = [];
        var requested_score = 0;
        var showBanner = true;
        var bannerPosition = 0;
        var bannerReady = false;
        var fullscreenReady = false;
        var pluginProto = cr.plugins_.CJSAds.prototype;
        pluginProto.Type = function(plugin) {
            this.plugin = plugin;
            this.runtime = plugin.runtime;
        };
        var typeProto = pluginProto.Type.prototype;
        typeProto.onCreate = function() {};
        /**
         * C2 specific behaviour
         */
        pluginProto.Instance = function(type) {
            this.type = type;
            this.runtime = type.runtime;
        };
        var instanceProto = pluginProto.Instance.prototype;
        var self;
        instanceProto.onCreate = function() {
            this.isShowingBanner = false;
            this.isShowingFullscreen = false;
            this.triggerProduct = "";
            this.socialService = null;
            this.socialServiceAvailable = false;
            this.socialServiceSelected = this.properties[2];
            
            this.storeManaged = (this.properties[1] !== 1);
            this.storeSandboxed = (this.properties[3] !== 0);
            this.socialServiceClientID = this.properties[4];
            this.facebookAppID = this.properties[5];
            this.facebookChannel = this.properties[6];
            this.onConsumePurchaseFailedTransactionId = "";
            this.onConsumePurchaseCompleted = "";
            this.onPurchaseCompleteInfo = "";

            self = this;
            
        };

        function Cnds() {};
        Cnds.prototype.IsShowingBanner = function() {
            return this.isShowingBanner;
        };
      
        Cnds.prototype.OnBannerShown = function() {
            return true;
        };
        Cnds.prototype.OnFullscreenShown = function() {
            return true;
        };
        Cnds.prototype.OnFullscreenHidden = function() {
            return true;
        };
        Cnds.prototype.onFullScreenReady = function() {
            return true;
        };
        Cnds.prototype.onBannerReady = function() {
            return true;
        };
        Cnds.prototype.onBannerHidden = function() {
            return true;
        };
        Cnds.prototype.IsShowingFullscreen = function() {
            return this.isShowingFullscreen;
        };
        Cnds.prototype.PreloadFullscreen = function() {
            return true;
        }

        Cnds.prototype.OnPurchaseStart = function(productid) {
            console.log("OnPurchaseStart ");
            return this.triggerProduct === productid;
        };
        Cnds.prototype.OnPurchaseComplete = function(productid) {
            console.log("OnPurchaseComplete ");
            return this.triggerProduct === productid;
        };
        Cnds.prototype.OnPurchaseFail = function(productid) {
            console.log("OnPurchaseFail ");
            return this.triggerProduct === productid;
        };
        Cnds.prototype.onProductsFetchStarted = function() {
            return true;
        }
        Cnds.prototype.onConsumePurchaseFailed = function() {
            return true;
        }
        Cnds.prototype.onConsumePurchaseCompleted = function() {
            return true;
        }
        Cnds.prototype.onConsumePurchaseStarted = function() {
            return true;
        }
        Cnds.prototype.onProductsFetchCompleted = function() {
            return true;
        }
        Cnds.prototype.onProductsFetchFailed = function() {
            return true;
        }
        Cnds.prototype.IsProductPurchased = function(productid) {
          
        };
        Cnds.prototype.OnKeyboardCancelled = function() {
            return true;
        };
        Cnds.prototype.OnKeyboardOK = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceLoginSuccess = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceLoginFailed = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceLogoutSuccess = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceLogoutFailed = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceSubmitScoreSuccess = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceSubmitScoreFailed = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceRequestScoreSuccess = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceRequestScoreFailed = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceOpenLeaderBoardSuccess = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceOpenLeaderBoardClosed = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceOpenAchievementsSuccess = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceOpenAchievementsClosed = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceResetAchievementsCompleted = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceResetAchievementsFailed = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceSubmitAchievementCompleted = function() {
            return true;
        };
        Cnds.prototype.onSocialServiceSubmitAchievementFailed = function() {
            return true;
        };
        Cnds.prototype.onRestorePurchasesStarted = function() {
            return true;
        };
        Cnds.prototype.onRestorePurchasesCompleted = function() {
            return true;
        };
        Cnds.prototype.onRestorePurchasesFailed = function() {
            return true;
        };
        pluginProto.cnds = new Cnds();
        /**
         * Plugin actions
         */
        function Acts() {};
        Acts.prototype.ShowBanner = function(layout_) {
         
            
           
        };
        Acts.prototype.ShowFullscreen = function() {
           
            
        };
        Acts.prototype.HideBanner = function() {
            
            showBanner = false;
         
            this.isShowingBanner = false;
        };
        Acts.prototype.PreloadBanner = function() {
           
        };
        Acts.prototype.PreloadFullscreen = function() {
           
        };
        Acts.prototype.RefreshBanner = function() {
            
        };
        Acts.prototype.RefreshFullScreen = function() {
            
        };
        Acts.prototype.Purchase = function(productid) {
         
        };
        Acts.prototype.ConsumePurchase = function(transactionId, productId) {
           
        };
        Acts.prototype.fetchProductsFromStore = function(products) {
            
        };
        Acts.prototype.PurchasePreview = function(productid) {
            
        };
        Acts.prototype.RestorePurchases = function() {
         
        };
        Acts.prototype.PromptKeyboard = function(title_, message_, initial_, type_, canceltext_, oktext_) {
         
            
    };

    Acts.prototype.UpdateProductsList = function() {
 
    };
    /**
     * Social service actions
     */
    function socialServiceRequestLoginCallback(isAuthenticated, error) {
        if (isAuthenticated) {
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceLoginSuccess, self);
        } else {
            console.log(JSON.stringify(error));
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceLoginFailed, self);
        }
    }; 
    Acts.prototype.socialServiceRequestLogin = function() {
        if (!this.socialServiceInterface) return;
        if (this.socialServiceInterface.isLoggedIn()) {
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceLoginSuccess, self);
        } else {
            this.socialServiceInterface.login(socialServiceRequestLoginCallback);
        }
    };

    function socialServiceRequestLogoutCallback(error) {
        if (!error) {
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceLogoutSuccess, self);
        } else {
            console.log(JSON.stringify(error));
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceLogoutFailed, self);
        }
    }; 
    Acts.prototype.socialServiceRequestLogout = function() {
        if (!this.socialServiceInterface) return;
        this.socialServiceInterface.logout(socialServiceRequestLogoutCallback);
    }; 
    Acts.prototype.socialServiceShare = function(textToShare) {
        
    };

    function socialServiceSubmitScoreCallback(err) {
        if (!err) {
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceSubmitScoreSuccess, self);
        } else {
            console.log(err);
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceSubmitScoreFailed, self);
        }
    }; 
    Acts.prototype.socialServiceSubmitScore = function(score_, leaderboard_) {
        if (!this.socialServiceInterface) return;
        if (this.socialServiceInterface.isLoggedIn())
            this.socialServiceInterface.submitScore(
                score_,
                socialServiceSubmitScoreCallback, {
                    leaderboardID: leaderboard_
                }
            );
    };

    function socialServiceRequestScoreCallback(loadedScore, err) {
        if (!err) {
            requested_score = loadedScore.score || 0;
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceRequestScoreSuccess, self);
        } else {
            console.log(err);
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceRequestScoreFailed, self);
        }
    }; 
    Acts.prototype.socialServiceRequestScore = function(leaderboard_) {
        if (!this.socialServiceInterface) return;
        if (this.socialServiceInterface.isLoggedIn())
            this.socialServiceInterface.requestScore(
                socialServiceRequestScoreCallback, {
                    leaderboardID: leaderboard_
                });
    };

    function socialServiceOpenLeaderboardCallback(err) {
        if (err) {
            console.log(err);
        }
        self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceOpenLeaderBoardClosed, self);
    }; 
    Acts.prototype.socialServiceOpenLeaderboard = function(leaderboard_) {
        if (!this.socialServiceInterface) return;
        if (!this.socialServiceInterface.isLoggedIn()) return;
        self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceOpenLeaderBoardSuccess, self);
        this.socialServiceInterface.showLeaderboard(
            socialServiceOpenLeaderboardCallback, {
                leaderboardID: leaderboard_
            }
        );
    };

    function socialServiceOpenAchievementsCallback(err) {
        if (err) {
            console.log(err);
        }
        self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceOpenAchievementsClosed, self);
    }
    Acts.prototype.socialServiceOpenAchievements = function() {
        if (!this.socialServiceInterface) return;
        if (!this.socialServiceInterface.isLoggedIn()) return;
        self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceOpenAchievementsSuccess, self);
        this.socialServiceInterface.showAchievements(socialServiceOpenAchievementsCallback);
    };

    function socialServiceResetAchievementsCallback(err) {
        if (err) {
            try {
                console.log(JSON.stringify(err));
            } catch (e) {
                for (var prop in err) {
                    console.log(err[prop]);
                }
                console.log(e);
            }
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceResetAchievementsFailed, self);
        } else {
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceResetAchievementsCompleted, self);
        }
    }
    Acts.prototype.socialServiceResetAchievements = function() {
        if (!this.socialServiceInterface) return;
        if (!this.socialServiceInterface.isLoggedIn()) return;
        this.socialServiceInterface.resetAchievements(socialServiceResetAchievementsCallback);
    };

    function socialServiceSubmitAchievementCallback(err) {
        if (err) {
            try {
                console.log(JSON.stringify(err));
            } catch (e) {
                for (var prop in err) {
                    console.log(err[prop]);
                }
                console.log(e);
            }
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceSubmitAchievementFailed, self);
        } else {
            self.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onSocialServiceSubmitAchievementCompleted, self);
        }
    }
    Acts.prototype.socialServiceSubmitAchievement = function(_achievementId) {
        if (!this.socialServiceInterface) return;
        if (!this.socialServiceInterface.isLoggedIn()) return;
        this.socialServiceInterface.submitAchievement(_achievementId, socialServiceSubmitAchievementCallback);
    }; pluginProto.acts = new Acts();
    /**
     * Expressions
     */
    function Exps() {}; Exps.prototype.InputText = function(ret) {
        ret.set_string(input_text);
    }; 
    Exps.prototype.PurchaseTransactionId = function(ret) {
        ret.set_string(PurchaseTransactionId);
    }; 
    Exps.prototype.PurchaseProductId = function(ret) {
        ret.set_string(PurchaseProductId);
    }; 
    Exps.prototype.ProductCount = function(ret) {
        ret.set_int(products_list.length);
    }; 
    Exps.prototype.ProductDescription = function(ret, index) {
        index = Math.floor(index);
        if (index < 0 || index >= products_list.length) {
            ret.set_string("");
            return;
        }
        ret.set_string(products_list[index]["description"]);
    }; 
    Exps.prototype.ProductLocalizedPrice = function(ret, index) {
        index = Math.floor(index);
        if (index < 0 || index >= products_list.length) {
            ret.set_string("");
            return;
        }
        ret.set_string(products_list[index]["localizedPrice"]);
    }; 
    Exps.prototype.ProductPrice = function(ret, index) {
        index = Math.floor(index);
        if (index < 0 || index >= products_list.length) {
            ret.set_string("");
            return;
        }
        ret.set_string(products_list[index]["price"]);
    }; 
    Exps.prototype.ProductAlias = function(ret, index) {
        index = Math.floor(index);
        if (index < 0 || index >= products_list.length) {
            ret.set_string("");
            return;
        }
        ret.set_string(products_list[index]["productAlias"]);
    }; 
    Exps.prototype.ProductID = function(ret, index) {
        index = Math.floor(index);
        if (index < 0 || index >= products_list.length) {
            ret.set_string("");
            return;
        }
        ret.set_string(products_list[index]["productId"]);
    }; 
    Exps.prototype.ProductTitle = function(ret, index) {
        index = Math.floor(index);
        if (index < 0 || index >= products_list.length) {
            ret.set_string("");
            return;
        }
        ret.set_string(products_list[index]["title"]);
    }; 
    Exps.prototype.PlayerScore = function(ret) {
        ret.set_float(requested_score);
    }; pluginProto.exps = new Exps();
}());